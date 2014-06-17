var mongoose = require('mongoose'),
    passport = require('passport'),
    crypto = require('crypto'),
    LocalPassport = require('passport-local');
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
        lastName: String,
        salt: String,
        hashPass: String,
        roles: [String]
    });
    userSchema.method({
        authenticate: function(password){
            if(generateHashedPassword(this.salt, password) === this.hashPass){
                return true;
            }
                    else{
                return false;
            }
        }
    });
    var User = mongoose.model('User',userSchema);
    User.find({}).exec(function(err,collection){
        if(err){
            console.log('Cannot find users: '+err);
            return;
        }
        if(collection.length === 0){
                var salt;
                var hashedPwd;
                salt = generateSalt();
                hashedPwd = generateHashedPassword(salt,'Zdravko');
                User.create({username: 'zdravko.petrov', firstName: 'Zdravko', lastName: 'Petrov',salt: salt, hashedPwd: hashedPwd, roles: ['admin']});
                salt = generateSalt();
                hashedPwd = generateHashedPassword(salt,'Ivan');
                User.create({username: 'ivan.it', firstName: 'Ivan', lastName: 'Kostov',salt: salt, hashedPwd: hashedPwd, roles: ['standard']});
                salt = generateSalt();
                hashedPwd = generateHashedPassword(salt,'Doncho');
                User.create({username: 'doncho', firstName: 'Doncho', lastName: 'Minkov',salt: salt, hashedPwd: hashedPwd, roles: []});
                console.log("Users added to database...");
            }
    });
};
function generateSalt(){
return crypto.randomBytes(128).toString('base64');
}
function generateHashedPassword(salt,pwd){
var hmac = crypto.createHmac('sha1',salt);
    return hmac.update(pwd).digest('hex');
}