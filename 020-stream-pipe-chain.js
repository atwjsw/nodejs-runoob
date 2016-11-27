// 接下来我们就是用管道和链式来压缩和解压文件。

var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('017-input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('020-input.txt.gz'));
  
console.log("文件压缩完成。");