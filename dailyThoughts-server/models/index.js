const mongoose = require('mongooose');

mongoose.set('debug', true);

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/dailyThoughts", {
    keepAlive: true,
});


module.exports = require('./user');

