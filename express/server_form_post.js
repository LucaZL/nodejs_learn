var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extend: false});

app.use('/public', express.static('public'));

app.get('/index_post.html', function(req, res) {
	res.sendFile(__dirname + "/" + "index_post.html");
})

app.post('/process_post', urlencodedParser, function(req, res) {
	var response = {
		"first_name": req.body.first_name,
		"last_name": req.body.last_name
	};

	console.log(response);

	res.end(JSON.stringify(response));
})

var server = app.listen(8888, '127.0.0.1', function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("website: http://%s:%s", host, port)
 
})