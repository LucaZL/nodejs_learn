var util = require("util");

console.log(util.isArray([]));
console.log(util.isArray(new Array));
console.log(util.isArray({}));

console.log(util.isRegExp('sdfuyiweir'));
console.log(util.isRegExp(new RegExp('another regexp')));
console.log(util.isRegExp({}));

console.log(util.isDate(new Date()));
console.log(util.isDate(Date()));
console.log(util.isDate({}));

console.log(util.isError(new Error()));
console.log(util.isError(new TypeError()));
console.log(util.isError({name: 'Error', message: 'an error occurred'}));