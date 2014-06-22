var mongoose = require('mongoose'),
    encryption = require('../utilities/encryption');

var messageSchema = mongoose.Schema({
    message: String
});
var Message = mongoose.model('Message',messageSchema);

var userSchema = mongoose.Schema({
    username: { type: String, require: '{PATH} is required', unique: true },
    firstName: { type: String, require: '{PATH} is required' },
    lastName: { type: String, require: '{PATH} is required' },
    salt: String,
    hashPass: String,
    roles: [String],
    message: String
});

userSchema.method({
    authenticate: function(password) {
        if(encryption.generateHashedPassword(this.salt, password) === this.hashPass){
            return true;
        }
        else {
            return false;
        }
    }
});
var User = mongoose.model('User', userSchema);
module.exports.seedInitialUsers = function() {
    User.find({}).exec(function(err, collection) {
        if (err) {
            console.log('Cannot find users: ' + err);
            return;
        }
            var salt;
            var hashedPwd;
            salt = encryption.generateSalt();
            hashedPwd = encryption.generateHashedPassword(salt, '14eiuqhwdyeuq');
            User.create({username: 'zaki1996', firstName: 'Zdravko', lastName: 'Petrov', salt: salt, hashPass: hashedPwd, roles: ['admin'], message: 'Message'});
            console.log('Users added to database...');
    });
};