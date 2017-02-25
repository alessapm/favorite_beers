const db = require('../config/database');
const bcrypt = require('bcrypt');

const Beer = {};

Beer.create = (beer) => {
  return db.none(`INSERT INTO beers (beer_name, beer_type, beer_image) VALUES ($1, $2, $3)`,
    [beer.beer_name, beer.beer_type, beer.beer_image]
    );
}



module.exports = Beer;
