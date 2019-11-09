require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const cors = require('cors');
const app = express();
const configDB = require('./config/mongoose');

app.use(cors());
app.use(urlencodedParser);
app.use(bodyParser.json());

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err });
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on port 3000!');
});