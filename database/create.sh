#!/bin/bash

# download raw data
git clone \
  --depth 1  \
  --filter=blob:none  \
  git@github.com:berlinonline/haeufige-vornamen-berlin.git \

# set up database file
rm -rf db.sqlite

sqlite3 db.sqlite "
    CREATE TABLE IF NOT EXISTS vornamen (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        vorname TEXT,
        anzahl INTEGER,
        geschlecht TEXT,
        position INTEGER,
        jahr INTEGER,
        bezirk TEXT
    )
"
sqlite3 db.sqlite "DELETE FROM vornamen"

for file in ./haeufige-vornamen-berlin/data/cleaned/**/*.csv; do
    bezirk=$(basename -s .csv $file)
    year=$(dirname $file | grep -Eo '[0-9]{4}')
    # We need to check if "position" is present in the header because that changed in 2017
    hasPosition=$(head -n1 $file | grep -o 'position')

    echo "Importing $bezirk for $year"
    sqlite3 db.sqlite "DROP TABLE tmp_table"
    sqlite3 -separator ',' db.sqlite ".import $file tmp_table"

    if [ $hasPosition ]; then     
        sqlite3 db.sqlite "
            INSERT INTO vornamen(vorname, anzahl, geschlecht, position, jahr, bezirk)
            SELECT vorname,anzahl,geschlecht,position,$year,'$bezirk'
            FROM tmp_table
        "
    else
        sqlite3 db.sqlite "
            INSERT INTO vornamen(vorname, anzahl, geschlecht, position, jahr, bezirk)
            SELECT vorname,anzahl,geschlecht,NULL,$year,'$bezirk'
            FROM tmp_table
        "
    fi
done
sqlite3 db.sqlite "DROP TABLE tmp_table"

# Optimize Table
sqlite3 db.sqlite "CREATE INDEX idx_vornamen_vorname ON vornamen(vorname);"
sqlite3 db.sqlite "CREATE INDEX idx_vornamen_anzahl ON vornamen(anzahl);"
sqlite3 db.sqlite "CREATE INDEX idx_vornamen_geschlecht ON vornamen(geschlecht);"
sqlite3 db.sqlite "CREATE INDEX idx_vornamen_position ON vornamen(position);"
sqlite3 db.sqlite "CREATE INDEX idx_vornamen_jahr ON vornamen(jahr);"
sqlite3 db.sqlite "CREATE INDEX idx_vornamen_bezirk ON vornamen(bezirk);"
sqlite3 db.sqlite "PRAGMA journal_mode = delete;"  # to be able to actually set page size
sqlite3 db.sqlite "PRAGMA page_size = 1024;" # trade off of number of requests that need to be made vs overhead
sqlite3 db.sqlite "vacuum;"

# clean up unneeded raw data
rm -rf ./haeufige-vornamen-berlin