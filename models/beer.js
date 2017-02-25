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


Beer.findFavsById = (user_id) => {
  return db.manyOrNone(`SELECT beers.beer_name, beers.beer_type, beers.beer_image FROM beers INNER JOIN beers_users ON beers_users.beer_id = beers.id INNER JOIN users ON beers_users.user_id = users.id WHERE users.id = $1`, [user_id])
}

module.exports = Beer;
