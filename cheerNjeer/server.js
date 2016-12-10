var express = require('express');
var app = express();

app.get('/cheer', function(req, res){
  res.send('Its a beautiful day!');
});


app.get('/jeer', function(req, res){
  res.send('Its a beautiful day -U2');
});

var server = app.listen(4000, function(){
  console.log('Listening on port 4000');
});
