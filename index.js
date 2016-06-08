var express = require('express');

var app = express();


app.get('/', function(req, res) {
  res.send({myKey: "Hello World"});
});


var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("You're listening to the smooth sounds of port " + port)
});