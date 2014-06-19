var User = require('mongoose').model('User'),
    encryption = require('../utilities/encryption');
module.exports = {
    createUser: function(req,res,next){
    var newUserData = req.body;
        newUserData.salt = encryption.generateSalt();
        newUserData.hashPass = encryption.generateHashedPassword(newUserData.salt ,newUserData.password);
        User.create(newUserData,function(err, user){
            if(err){
                console.log('Failed to register...');
                return;
            }
            req.logIn(user,function(err){
                if(err){
                    res.status(400);
                    return res.next({reason: err.toString()})
            }
                res.send(user);
            });
      });
    },
    updateUser: function(req, res, next){
        if(req.user._id == req.body._id || req.user.roles.indexOf('admin') > -1){
            var updateUserData = req.body;
            if(updateUserData.password && updateUserData.password.length > 0){
                updateUserData.salt = encryption.generateSalt();
                updateUserData.hashPass = encryption.generateHashedPassword(updateUserData.salt, updateUserData.password);

            }
            User.update({_id: req.body-_id}, updatedUserData, function(){
                res.end();
            });
        }
        else{
            req.send({reason: 'You have no permitions'});
        }

    },
    getAllUsers: function(req,res){
        User.find({}).exec(function(err,collection){
            if(err){
                console.log('Users could not be logged: '+err);
            }
            else{
                res.send(collection);
            }
        });
    }
};