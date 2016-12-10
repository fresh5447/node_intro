var express = require('express');
var app = express();

app.get('/hello.txt', function(req, res){
  res.send('Hello world');
});

var server = app.listen(4000, function(){
  console.log('Listening on port 4000');
});
