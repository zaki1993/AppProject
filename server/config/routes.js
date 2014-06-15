var passport = require('passport'),
    auth = require('./auth');
module.exports = function(app){
    app.get('/partials/:partialName',function(req,res){
        res.render('partials/'+ req.params.partialName);
    });

    app.post('/login', auth.login);

    app.get('*', function(req,res){
        res.render('index');
    });
};