var express = require("express");
var app = express();
var fs = require("fs");

app.get('/listusers', function(req, res) {
	fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data) {
		if(err) {
			console.log('error happend: ' + err);
		}else{
			console.log(data);
			res.end(data);
		}
	});
})

var user = {
	"user4": {
		"name" : "mohit",
		"password" : "password4",
		"profession" : "teacher",
		"id": 4
	}
}

app.get('/addUser', function(req, res) {
	fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data) {
		data = JSON.parse(data);
		data['user4'] = user['user4'];
		console.log(data);
		res.end(JSON.stringify(data));
	});
})

app.get("/:id", function(req, res) {
	fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data) {
		data = JSON.parse(data);
		var user = data["user" + req.params.id];
		console.log(user);
		res.end(JSON.stringify(user));
	});
})

app.get("/delete/:id", function(req, res) {
	fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data) {
		data = JSON.parse(data);
		var user = data["user" + req.params.id];
		console.log("will be deleted user: ");
		console.log(user);
		res.end(JSON.stringify(user));
	});
})

var server = app.listen(8888, '127.0.0.1', function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('webiste: http://%s:%s', host, port);
})