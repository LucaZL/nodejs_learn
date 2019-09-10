const fs = require('fs');
const child_process = require('child_process');

for(var i = 0;i < 3; i++) {
	var workProcess = child_process.spawn('node', ['support.js', i]);
	workProcess.stdout.on('data', function(data) {
		console.log('stdout: ' + data);
	});

	workProcess.stderr.on('data', function(data) {
		console.log('stderr: ' + data);
	});

	workProcess.on('close', function(code) {
		console.log('exit code is:' + code);
	});
}