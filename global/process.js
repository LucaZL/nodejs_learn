process.on('exit', function(code){

	setTimeout(function(){
		console.log("this code won't be carried out.")
	}, 0);

	console.log('exit code:', code);
});


process.stdout.write("Hello world! " + "\n");

process.argv.forEach(function(val, index, array){
	console.log(index + ": " + val);
});

console.log(process.execPath);

console.log(process.platform);

console.log('current catalogue: ' + process.cwd());

console.log('current version: ' + process.version);

console.log(process.memoryUsage());

console.log("end program");