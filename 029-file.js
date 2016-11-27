var fs = require("fs");

// 异步读取
fs.readFile('029-input.txt', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync('029-input.txt');
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");