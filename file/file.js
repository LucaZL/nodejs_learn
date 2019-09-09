var fs = require("fs");

fs.readFile('input.txt', function(err, data){
	if(err) {
		return console.error(err);
	}
	console.log('async read file: ' + data.toString());
});

var data = fs.readFileSync('input.txt');
console.log('read file sync: ' + data.toString());

console.log('end program');