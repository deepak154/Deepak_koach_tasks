const express = require('express');

const homeControllers = require('../controllers/home');

const router = express.Router();

router.get('/', homeControllers.getIndex);

router.get('/home', homeControllers.getHome);

router.get('/login', homeControllers.getLogin);

module.exports = router;

