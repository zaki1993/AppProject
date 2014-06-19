var mongoose = require('mongoose'),
    encryption = require('../utilities/encryption');
var userSchema = mongoose.Schema({
    username: {type: String, require: '(PATH) is required', unique: true},
    firstName: {type: String, require: '(PATH) is required', unique: true},
    lastName: {type: String, require: '(PATH) is required', unique: true},
    salt: String,
    hashPass: String,
    roles: [String]
});
userSchema.method({
    authenticate: function(password){
        if(encryption.generateHashedPassword(this.salt, password) === this.hashPass){
            return true;
        }
        else{
            return false;
        }
    }
});
var User = mongoose.model('User',userSchema);

module.exports.seedInitialUsers = function(){

    User.find({}).exec(function(err,collection){
        if(err){
            console.log('Cannot find users: '+err);
            return;
        }
        if(collection.length === 0){
            var salt;
            var hashedPwd;
            salt = encryption.generateSalt();
            hashedPwd = encryption.generateHashedPassword(salt,'Zdravko');
            User.create({username: 'zdravko.petrov', firstName: 'Zdravko', lastName: 'Petrov',salt: salt, hashedPwd: hashedPwd, roles: ['admin']});
            salt = encryption.generateSalt();
            hashedPwd = encryption.generateHashedPassword(salt,'Ivan');
            User.create({username: 'ivan.it', firstName: 'Ivan', lastName: 'Kostov',salt: salt, hashedPwd: hashedPwd, roles: ['standard']});
            salt = encryption.generateSalt();
            hashedPwd = encryption.generateHashedPassword(salt,'Doncho');
            User.create({username: 'doncho', firstName: 'Doncho', lastName: 'Minkov',salt: salt, hashedPwd: hashedPwd, roles: []});
            console.log("Users added to database...");
        }
    });
};