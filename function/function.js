function say(word) {
	console.log(word);
}

function execute(someFunction, arg1) {
	someFunction(arg1);
}

execute(say, "Hello World");