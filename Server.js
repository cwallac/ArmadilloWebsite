var path = require('path'),
	express = require('express'),
	app = express(),
	download = require('./download'),
	url = require('url');



//Renders homepage
app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.get('/team.html', function(req, res) {
  res.sendfile(__dirname + '/team.html');
});

app.get('/product.html', function(req, res) {
  res.sendfile(__dirname + '/product.html');
});

app.get('/feedback.html', function(req, res) {
  res.sendfile(__dirname + '/feedback.html');
});








app.listen(3000);



