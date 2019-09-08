function execute(someFunction, arg1) {
	someFunction(arg1);
}

execute(function(word){console.log(word) }, 'Hello World From Anonymous');