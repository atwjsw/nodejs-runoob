var util = require('util'); 

//inspect
function Person() { 
	this.name = 'byvoid'; 
	this.toString = function() { 
	return this.name; 
	}; 
} 
var obj = new Person(); 

console.log(obj);

console.log(util.inspect(obj)); 

console.log(util.inspect(obj, true)); 

//isArray
console.log('isArray:');
console.log(util.isArray([]));  // true
console.log(util.isArray(new Array));   // true
console.log(util.isArray({}));   // false

//isRegExp
console.log('isRegExp:');
console.log(util.isRegExp(/some regexp/)); // true
console.log(util.isRegExp(new RegExp('another regexp'))); // true
console.log(util.isRegExp({})); // false

//isDate
console.log('isDate:');
console.log(util.isDate(new Date())); // true
console.log(util.isDate(Date())); // false (without 'new' returns a String)
console.log(util.isDate({})); // false

//isError
console.log('isError:');
console.log(util.isError(new Error())); // true
console.log(util.isError(new TypeError())); // true
console.log(util.isError({name: 'Error', message: 'an error occurred' })); // false