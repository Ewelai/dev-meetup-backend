const express = require('express');
const router = express.Router();
const usersRoutes = require('./user.routes');
const authRoutes = require('./auth.routes');

router.use('/v1/users', usersRoutes);
router.use('/v1/auth', authRoutes);

module.exports = router;
