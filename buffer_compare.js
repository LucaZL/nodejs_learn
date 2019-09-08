var buf1 = Buffer.from('ABC');
var buf2 = Buffer.from('ABCD');
var result = buf1.compare(buf2);

console.log(result);
if(result < 0) {
	console.log('buf1 is before buf2');
}else if(result == 0) {
	console.log('buf1 is equal to buf2');
}else if(result > 0) {
	console.log('buf1 is after buf2');
}