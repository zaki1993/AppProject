var express = require('express'),
    stylus = require('stylus'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');
var env = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 1234;
var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/server/views');
app.use(bodyParser());
app.use(stylus.middleware(
    {
        src: __dirname + '/public',
            compile: function(str, path){
        return stylus(str).set('filename',path);
        }
    }
));

app.get('/partials/:partialName',function(req,res){
res.render('partials/' + req.params.partialName);
});

app.use(express.static(__dirname +  '/public'));

if(env == "development"){
    mongoose.connect('mongodb://localhost/project');
}
else {
    mongoose.connect('mongodb://zaki1993:14eiuqhwdyeuq@ds031339.mongolab.com:31339/project');
}

var db = mongoose.connection;

db.on('open',function(err){
if(err){
    console.log(err);
    return;
}
    console.log("Database up and running...");
});
db.on('error',function(err){
    console.log(err);
});
app.get('*', function(req,res){
    res.render('index');
});

app.listen(port);
console.log('Server running on port '+port);
console.log(env);