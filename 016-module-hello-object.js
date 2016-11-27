// 引入了当前目录下的hello.js文件（./ 为当前目录，node.js默认后缀为js）
// require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。
// 在外部引用该模块时，其接口对象就是要输出的 Hello 对象本身，而不是原先的 exports。
var Hello = require('./016-hello-object'); 
hello = new Hello(); 
hello.setName('BYVoid'); 
hello.sayHello(); 

