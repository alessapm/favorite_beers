//YOU ARE IN Beer controller.js


const User = require('../../models/user');
const Beer = require('../../models/beer');

const controller = {};

controller.index = (req, res) => {
  res.render('beers/index')
};

controller.create = (req, res) => {
  Beer.create(req.body.beer)
  .then(() => res.redirect(`/users/${req.session.user.id}/beers`))
  .catch(err => console.log('error: ', err));
};


module.exports = controller;

