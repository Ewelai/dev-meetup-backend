const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth.controller');

router.route('/')
    .post(AuthController.login)

module.exports = router;
