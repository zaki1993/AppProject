var mongoose = require('mongoose'),
    passport = require('passport'),
    LocalPassport = require('passport-local');;
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

   var userSchema = mongoose.Schema({
        username: String,
        firstName: String,
        lastName: String
        //salt: String,
        //hashPass: String
    });
    var User = mongoose.model('User',userSchema);
    User.find({}).exec(function(err,collection){
        if(err){
            console.log('Cannot find users: '+err);
            return;
        }
        if(collection.length === 0){
            User.create({username: 'zdravko.petrov', fistName: 'Zdravko', lastName: 'Petrov'});
            User.create({username: 'ivan.it', fistName: 'Ivan', lastName: 'Kostov'});
            User.create({username: 'doncho', fistName: 'Doncho', lastName: 'Minkov'});
            console.log("Users added to database...");
        }
        passport.use(new LocalPassport(function(username, password, done){
        User.findOne({ username: username}).exec(function(err,user){
            if(err) {
                console.log('Error loading user: ' + err);
                return;
            }
            if(user){
                return done(null,user);
            }
            else{
                return done(null, false);
            }
        });
        }));
        passport.serializeUser(function(user,done){
            if(user){
                return done(null, user._id);
            }
       });
        passport.deserializeUser(function(id,done){
            User.findOne({_id: id}).exec(function(err,user){
                if(err){
                console.log("Error loading user: "+ err);
                return;
            }
                if(user){
                    return done(null, user);
                }
                else{
                    return done(null,false);
                }
            });
        });
    });
};