const buf1 = Buffer.from(('buffer string 1'));
const buf2 = Buffer.from(('buffer string 2'));
const buf3 = Buffer.concat([buf1, buf2]);

console.log(buf3.toString());