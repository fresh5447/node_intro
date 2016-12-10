var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var tweets = [
  { text: "Hello there", time: new Date().getTime() - 12300 },
  { text: "Thanks, pal", time: new Date().getTime() - 1000 },
  { text: "That's offensive", time: new Date().getTime() },

]

app.use(express.static(__dirname + '/public'));

app.get('/tweets', function(req, res) {
  res.json(tweets)
})

app.post('/tweets', function(req, res) {
  var newTweet = { text: req.body.tweet, time: new Date().getTime() };
  tweets.push(newTweet);
  res.json(tweets);
})

var server = app.listen(5000);
