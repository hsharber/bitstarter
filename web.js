var express = require('express');
var fs = require('fs');
var infile = "index.html";
var buf;

  fs.readFile(infile, function (err, data) {
    if (err) throw err;
    buf = new Buffer(data);
  });

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString());
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
