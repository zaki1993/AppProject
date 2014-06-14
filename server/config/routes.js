module.exports = function(app){

    app.get('/partials/:partialName',function(req,res){
        res.render('partials/'+ req.params.partialName);
    });
    app.get('*', function(req,res){
        res.render('index');
    });
};