require('dotenv').config()
const mongodb = require('./config/mongodb');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const passport = require('passport');

app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 3005;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.set('port', PORT);
app.set('env', NODE_ENV);

app.use(bodyParser.json());
app.use('/api', require(path.join(__dirname, 'routes')));


app.listen(PORT, () => {
  console.log(
    `Express Server started on Port ${app.get(
      'port'
    )} | Environment : ${app.get('env')}`
  );
});
