var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer = require('multer');

app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({dest: '/tmp/'}).array('upload_file'));

app.get('/file_upload.html', function(req, res) {
	res.sendFile(__dirname + "/" + "file_upload.html");
})

app.post('/file_upload', function(req, res) {
	console.log(req.files[0]);

	var des_file = __dirname + "/tmp/" + req.files[0].originalname;
	fs.readFile(req.files[0].path, function(err, data) {
		fs.writeFile(des_file, data, function(err){
			if(err) {
				console.log('error happend: ' + err);
			}else{
				response = {
					message: 'File uploaded suuccessfully',
					filename: req.files[0].originalname	
				};
			}
			console.log(response);
			res.end(JSON.stringify(response));
		});
	});
})

var server = app.listen(8888, '127.0.0.1', function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("website: http://%s:%s", host, port)
 
})