var fs = require("fs");

//同步读取文本文件
var data = fs.readFileSync('004-input.txt');

console.log(data.toString());
console.log("程序执行结束!");