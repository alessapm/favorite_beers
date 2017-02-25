const express = require('express');
const router = express.Router();

router.use('/users', require('./controllers/users'));

router.use('/beers', require('./controllers/beers'));

module.exports = router;
