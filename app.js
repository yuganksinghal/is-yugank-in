var express = require('express');
var app = express();
var isYugankIn = "¯\\_(ツ)_/¯ No report of him yet";

app.get('/', function (req, res) {
  if(isYugankIn === true){
    res.sendFile('/views/yes.html');
  } else if(isYugankIn === false){
    res.sendFile('/views/no.html');
  } else {
    res.send(isYugankIn);
  }
});

app.get('/yes', function(req,res){
    isYugankIn = true;
    res.sendStatus(200);
});

app.get('/no', function(req,res){
    isYugankIn = false;
    res.sendStatus(200);
});

var server = app.listen(process.env.PORT || 5000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Yugank is listening at http://%s:%s', host, port);

});
