const express = require('express');
const router = express.Router();

const controller = require('./controller');

const AuthService = require('../../services/auth');


router.get('/', controller.index);

router.post('/', controller.create);

router.post('/fav', AuthService.restrict, controller.favorite);
router.delete('/fav', controller.removeFav);

module.exports = router;
