var express = require("express");
var app = express();

app.get('/', function(req, res) {
	console.log('index page get');
	res.send('Hello Get');
})

app.post('/', function(req, res) {
	console.log('index page post');
	res.send('Hello Post')
})

app.get('/delete', function(req, res) {
	console.log('delete ');
	res.send('Hello delete')
})

app.get('/list', function(req, res) {
	console.log('list');
	res.send('Hello list');
})

app.get('/zl*wln', function(req, res) {
	console.log('reg request: /zl*wln');
	res.send('Hello reg');
})

var server = app.listen(8888, '127.0.0.1', function() {
	var host = server.address().address
	var port = server.address().port

	console.log('website url: http://%s:%s', host, port);
})