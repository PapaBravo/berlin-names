#!/bin/bash

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

for file in ../../haeufige-vornamen-berlin/data/cleaned/**/*.csv; do
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