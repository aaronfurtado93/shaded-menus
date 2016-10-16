var express = require('express');
var app = express();

app.use(express.static('dev'));

app.get('*', function (req, res) {
  res.sendfile('dev/index.html');
});

app.listen(44947, function () {
  console.log('Development Server listening on port 44947!');
});
