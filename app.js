var express = require('express');
var app = express();
var isYugankIn;

app.get('/', function (req, res) {
    res.send(isYugankIn);
});

app.get('/yes', function(req,res){
    isYugankIn = true;
    res.send(200);
});

app.get('/no', function(req,res){
    isYugankIn = false;
    res.send(200);
});

var server = app.listen(process.env.PORT || 5000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Yugank is listening at http://%s:%s', host, port);

});
