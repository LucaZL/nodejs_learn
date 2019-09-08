var events = require('events');

var emitter = new events.EventEmitter();

var listener1 = function listener1() {
	console.log('listener 1 carry out');
}

var listener2 = function listener2() {
	console.log('listener 2 carry out');
}

emitter.addListener('connection', listener1);

emitter.on('connection', listener2);

var eventListeners = emitter.listenerCount('connection');
console.log('the number of connectted listeners is: ' + eventListeners);

emitter.emit('connection');

emitter.removeListener('connection', listener1);
console.log('remove listener1');

emitter.emit('connection');

eventListeners = emitter.listenerCount('connection');
console.log('the number of connectted listeners is: ' + eventListeners);

console.log('end program');