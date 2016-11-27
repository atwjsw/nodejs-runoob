//引入模块util
var util = require('util'); 

//定义基类 Base，有三个在构造函数内定义的属性
function Base() { 
	this.name = 'base'; 
	this.base = 1991; 
	this.sayHello = function() { 
		console.log('Hello ' + this.name); 
	}; 
} 

//定义base基类原型上的一个属性
Base.prototype.showName = function() { 
	console.log(this.name);
}; 

//定义子类
function Sub() { 
	this.name = 'sub'; 
} 

//通过util.inherits 实现继承。
util.inherits(Sub, Base); 

var objBase = new Base(); 
objBase.showName(); //base
objBase.sayHello(); // Hello base
console.log(objBase); // Base { name: 'base', base: 1991, sayHello: [Function] }

var objSub = new Sub(); 
objSub.showName(); //sub
//objSub.sayHello(); //Hello sub
console.log(objSub); //name sub sayHello showName

// 我们定义了一个基础对象Base 和一个继承自Base 的Sub，
// Base 有三个在构造函数内定义的属性和一个原型中定义的函数，通过util.inherits 实现继承。