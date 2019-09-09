var http = require("http");
var querystring = require("querystring");

var postHTML = 
	'<html><head><meta charset="utf-8"><title>test post</title></head>'+
	'<body>' +
	'<form method="post">' +
	'website name: <input name="name" /><br>' +
	'url: <input name="url" /><br>' +
	'<input type="submit" />' +
	'</form>' +
	'</body>' +
	'</html>'

http.createServer(function(req, res) {
	var body = '';
	req.on('data', function(chunk){
		body += chunk;
	});

	req.on('end', function(){

		body = querystring.parse(body);
		
		res.writeHead(200, {"content-Type": 'text/html; charset=utf8'});

		if(body.name && body.url) {
			res.write('website name: '+ body.name);
			res.write('<br>');
			res.write('url: ' + body.url);
		}else{
			res.write(postHTML);
		}
		res.end();
	});
}).listen(8888);