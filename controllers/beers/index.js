const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/', controller.index);

router.post('/', controller.create);

router.post('/fav', controller.favorite);

module.exports = router;
