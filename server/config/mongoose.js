var mongoose = require('mongoose'),
    user = require('../models/User'),
    passport = require('passport');
module.exports = function(config){
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('open',function(err){
        if(err){
            console.log(err);
            return;
        }
        console.log("Database up and running...");
    });
    db.on('error',function(err){
        console.log('Database error: ' + err);
    });
    user.seedInitialUsers();
};