const db = require('../config/database');
const bcrypt = require('bcrypt');

const Beer = {};

Beer.create = (beer) => {
  return db.none(`INSERT INTO beers (beer_name, beer_type, beer_image) VALUES ($1, $2, $3)`,
    [beer.beer_name, beer.beer_type, beer.beer_image]
    );
}

Beer.findAll = () => {
  return db.manyOrNone(`SELECT * FROM beers`)
}

Beer.favorite = (id, user) => {
  return db.none(`INSERT INTO beers_users (user_id, beer_id) VALUES ($1, $2)`,
    [user.id, id]
    );
}


module.exports = Beer;
