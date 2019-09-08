var buf1 = Buffer.from('abcdefghijklmn');
var buf2 = buf1.slice(3,6);

console.log(buf2.toString());

console.log(buf1.length + "," + buf2.length);