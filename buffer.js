const buf = Buffer.from('runoob', 'ascii');

console.log(buf.toString('hex'));

console.log(buf.toString('base64'));

const buf1 = Buffer.alloc(10);

const buf2 = Buffer.alloc(10, 1);

const buf3 = Buffer.allocUnsafe(10);

const buf4 = Buffer.from([1, 2, 3]);

const buf5 = Buffer.from('test');

const buf6 = Buffer.from('test', 'latin1');

const bufwritter = Buffer.alloc(256);
len = bufwritter.write("www.jinghua.com");

console.log("the length of written buffer is: " + len);

const bufTostring = Buffer.alloc(26);

for(var i=0;i<26;i++) {
	bufTostring[i] = i + 97;
}

console.log(bufTostring.toString('ascii'));
console.log(bufTostring.toString('ascii', 0, 5));
console.log(bufTostring.toString('utf8', 0, 5));
console.log(bufTostring.toString(undefined, 0, 5));
