var User = require('mongoose').model('User');
module.exports = {
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