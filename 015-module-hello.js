// 引入了当前目录下的hello.js文件（./ 为当前目录，node.js默认后缀为js）
// require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。
var hello = require('./015-hello');
hello.world();
hello.nodejs();