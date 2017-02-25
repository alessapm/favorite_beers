//YOU ARE IN Beer controller.js


const User = require('../../models/user');
const Beer = require('../../models/beer');

const controller = {};

controller.index = (req, res) => {
  Beer.findAll()
  .then((data) => {
    res.render('beers/index', { beers: data })
  })
  .catch(err => console.log('err: ', err));

};

controller.create = (req, res) => {
  Beer.create(req.body.beer)
  .then(() => res.redirect(`/users/${req.session.user.id}/beers`))
  .catch(err => console.log('error: ', err));
};

controller.favorite = (req, res) => {
  console.log('req.body.beers.id: ', req.body.beers.id);
  console.log('req.session.user: ', req.session.user)

  Beer.favorite(req.body.beers.id, req.session.user)
  .then((data) => {
    console.log('beer fav data: ', data)
    res.redirect(`/users/${req.session.user.id}/beers`)
  })
  .catch(err => console.log('error in favorites: ', err));
};


module.exports = controller;

