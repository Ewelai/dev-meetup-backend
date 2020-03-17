const UserModel = require('../models/user');

class AuthController {
    signup(req, res) {

    };

    login(req, res, next) {
        res.json({ status: 'ok' })
    };
}

module.exports = new AuthController();
