var express = require('express'),
    stylus = require('stylus'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');
var env = process.env.NODE_ENV || 'development';
var port = 1234;
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

mongoose.connect('mongodb://localhost/project');
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
var messageSchema = mongoose.Schema({
    message: String
});
var Message = mongoose.model('Message',messageSchema);
Message.remove({}).exec(function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Message deleted...");
});
Message.create({message: 'Hi from mongoose'}).then(function(model){
console.log(model.message);
});

app.get('*', function(req,res){
    res.render('index');
});

app.listen(port);
console.log('Server running on port '+port);