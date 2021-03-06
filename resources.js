const express = require('express');
const router = express.Router();

router.use('/users', require('./controllers/users'));

router.use('/beers', require('./controllers/beers'));

router.get('/', (req, res) => res.redirect('/beers'));

module.exports = router;
