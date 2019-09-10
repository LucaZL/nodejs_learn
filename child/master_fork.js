const fs = require('fs');
const child_process = require('child_process');

for(var i = 0; i < 3; i++) {
	var workProcess = child_process.fork("support.js", [i]);

	workProcess.on('close', function(code) {
		console.log('the exit code of child process is: ' + code);
	});
}