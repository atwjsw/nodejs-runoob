//hello.js 
function Hello() { 
	var name; 
	this.setName = function(thyName) { 
		name = thyName; 
	}; 
	this.sayHello = function() { 
		console.log('Hello ' + name); 
	}; 
}

module.exports = Hello;

// 有时候我们只是想把一个对象封装到模块中，
// 模块接口的唯一变化是使用 module.exports = Hello 代替了exports.world = function(){}。 
