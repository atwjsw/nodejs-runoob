var fs = require("fs");
var zlib = require('zlib');

// 解压 input.txt.gz 文件为 input.txt
fs.createReadStream('020-input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('021-output.txt'));
  
console.log("文件解压完成。");