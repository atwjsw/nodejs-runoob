var fs = require("fs");

console.log("创建目录");
fs.mkdir("C:\\Users\\ewendia\\Documents\\Ericsson 20160530\\4 Knowledge Development\\68 nodejs\\037-file-makdir",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("目录创建成功。");
});
