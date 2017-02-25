// YOU ARE IN USERS controller.js

const User = require('../../models/user');
const Beer = require('../../models/beer');

const bcrypt = require('bcrypt');

const controller = {};


controller.new = (req, res) => {
  res.render('users/new');
};



controller.create = (req, res) => {
  User.create(req.body.user)
  .then((data) => {


    res.redirect('users/new')
  })
  .catch((err) => console.log('error: ', err))
};



controller.login = (req, res) => {
  const error = {};

  if (req.query.error){
    error.message = 'Your email or password is incorrect. Please login again.'
  };

  res.render('users/login', { message: error.message })
};



controller.show = (req, res) => {
  Beer.findFavsById(req.params.id)
  .then((data) => {
    res.render('users/show', { beers: data })
  })
  .catch(err => console.log('error in findFav: ', err));

};



controller.process_login = (req, res) => {
  User.findByEmail(req.body.user.email)
  .then((user) => {
    if(user) {
      const isAuthed = bcrypt.compareSync(req.body.user.password, user.password_digest);
        if (isAuthed) {
          req.session.isAuthenticated = true;
          delete user.password_digest;
          req.session.user = user;  //now we can use req.session to get information about our loggedin user on other pages
          res.redirect(`/users/${user.id}/beers`);
        } else {
          res.redirect('/users/login?error=true');
        }
    } else {
      res.redirect('/users/new?error=true');
    }
  })
};



module.exports = controller;
