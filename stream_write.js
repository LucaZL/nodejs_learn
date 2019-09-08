var fs = require('fs');
var data = "www.Luca&Lina.com -+++- Stupid Luca";

var writerStream = fs.createWriteStream('output.txt');

writerStream.write(data, 'UTF8');

writerStream.end();

writerStream.on('finish', function() {
	console.log('write finish!');
});

writerStream.on('error', function(err) {
	console.log('error happend!');
	console.log(err.stack);
});


console.log('end program!!!!');