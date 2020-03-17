const express = require('express');
const router = express.Router();

const usersRoutes = require('./user.routes');
const authRoutes = require('./auth.routes');

// UTILS
const roles = require('../utils/roles');

// MIDDLEWARE
const authMiddleware = require('../middleware/auth.middleware');

router.use('/v1/users', usersRoutes);
router.use('/v1/auth', authMiddleware.auth(), authRoutes);

module.exports = router;

/*
Todo:
1. Middleware for login
*/
