var path = require('path'),
	express = require('express'),
	app = express(),
	
	url = require('url');



//Renders homepage
app.get('*', function(req, res) {
	var site = url.parse(req.url,true).pathname
  res.sendfile(__dirname + '/Public' + site);
});








app.listen(3000);



