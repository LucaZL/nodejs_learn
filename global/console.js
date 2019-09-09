console.info("begin programe");

var counter = 10;
console.log("start: %d", counter);

console.time("get access data");


for(var i=0;i<20;i++) {
	console.log(i);
}

console.timeEnd("get access data");

console.info("end program");