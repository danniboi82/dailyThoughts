const mongoose = require('mongoose');
//use set function pass in debug of true to see log in mongo terminal
mongoose.set('debug', true);
//specify promise library to use to es15 Promise 
//IMPORTANT because use of es17 async/await functions
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/dailyThoughts", {
    keepAlive: true,
});


module.exports.User = require('./user');
module.exports.Thought = require('./thought');

