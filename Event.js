var events = require("events");

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
	console.log("connect success");

	eventEmitter.emit("data_recieved");
}

eventEmitter.on("connection", connectHandler);

eventEmitter.on("data_recieved", function(){
	console.log("data recieve success");
});

eventEmitter.emit("connection");

console.log("end program");