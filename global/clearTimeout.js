function printHello() {
	console.log("Hello world");
}

var t = setTimeout(printHello, 1000);

clearTimeout(t);