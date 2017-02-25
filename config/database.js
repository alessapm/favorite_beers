// DATABASE IS CALLED beers_app

const pgp = require('pg-promise')();

const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'beers_app'
});

module.exports = db;
