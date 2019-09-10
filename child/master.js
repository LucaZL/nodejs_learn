const fs = require('fs');
const child_process = require('child_process');

for(var i = 0; i < 3; i++) {
	var workProcess = child_process.exec('node support.js ' + i, function(error, stdout, stderr) {
		if(error) {
			console.log(error.stack);
			console.log("error code: " + error.code);
			console.log("Signal recieved: " + error.signal);
		}
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
	});

	workProcess.on('exit', function(code) {
		console.log('child process has exited, code is ' + code);
	});
}