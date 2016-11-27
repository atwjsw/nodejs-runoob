var events = require('events'); 

var emitter = new events.EventEmitter(); 

emitter.on('someEvent', function(arg1, arg2) { 
	console.log('listener1', arg1, arg2); 
}); 
emitter.once('someEvent', function(arg1, arg2) { 
	console.log('listener2', arg1, arg2); 
}); 

var add = function(arg1, arg2) {
	console.log('listener3', arg1+arg2); 
};

emitter.on('someEvent', add); 

emitter.emit('someEvent', 'arg1 参数', 'arg2 参数'); 
emitter.emit('someEvent', 3, 4); 

console.log(emitter.listeners("someEvent"));
console.log(events.EventEmitter.listenerCount(emitter, 'someEvent'));

//以上例子中，emitter 为事件 someEvent 注册了三个事件监听器，然后触发了 someEvent 事件。
//运行结果中可以看到三个事件监听器回调函数被先后调用。 这就是EventEmitter最简单的用法。
//EventEmitter 提供了多个属性，如 on 和 emit。on 函数用于绑定事件函数，emit 属性用于触发一个事件。
//接下来我们来具体看下 EventEmitter 的属性介绍。
