var http = require("http");
var url = require("url");
var util = require("util");

http.createServer(function(req, res) {
	res.writeHead(200, {"content-Type": 'text/plain'});

	var params = url.parse(req.url, true).query;
	res.write("name: " + params.name);
	res.write("\n");
	res.write("url: " + params.url);

	res.end();
}).listen(8888);