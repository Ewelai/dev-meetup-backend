const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@meetup-qjwxy.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', error => console.log(error));

mongoose.Promise = global.Promise;

module.exports = mongoose