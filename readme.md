# Introduction

This is a tech demo to show that read only sqlite databases can be hosted on static file hosters like github pages. It follows Following https://github.com/phiresky/sql.js-httpvfs

It uses Open Data https://github.com/berlinonline/haeufige-vornamen-berlin as an example.

# Build

## Create Database
* On a unix like system
* Install SQLite3 https://sqlite.org/index.html
* Run the bash script `./database/create.sh`

## Website
* On a unix like system (otherwise npm script paths have to be fixed)
* Install NodeJS (and with that NPM) https://nodejs.org

### Local development
```sh
cd web
npm install
npm run serve
```
Visit website at http://localhost:9000

### "Production" build
```sh
cd web
npm ci
npm run build
```
Serve the folder `./web/dist` on any web server.

# Visit

The result of this repository is automatically deployed to https://papabravo.github.io/berlin-names/ via github actions.
