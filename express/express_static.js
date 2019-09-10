var express = require('express');
var app = express();

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
	res.send('Hello World');
})

var server = app.listen(8888, '127.0.0.1', function() {
	var host = server.address().address
	var port = server.address().port

	console.log('website: http://%s:%s', host, port);
})