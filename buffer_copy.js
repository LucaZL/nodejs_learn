var buf1 = Buffer.from('abcdefghijklmn');
var buf2 = Buffer.from('Stupid');

buf2.copy(buf1, 3);

console.log(buf1.toString());
console.log(buf2.toString());