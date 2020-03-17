const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth.controller');

// // UTILS
// const roles = require('../utils/roles');

// // MIDDLEWARE
// const authMiddleware = require('../middleware/auth.middleware');

router.post('/login', AuthController.login);
// router.route('/signup').post(AuthController.signup);


module.exports = router;
