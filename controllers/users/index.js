const express = require('express');
const router = express.Router();

const controller = require('./controller');

const AuthService = require('../../services/auth');



router.get('/new', controller.new);

router.get('/login', controller.login);

router.get('/:id/beers', AuthService.restrict, controller.show);



router.post('/login', controller.process_login);

router.post('/', controller.create);




module.exports = router;


