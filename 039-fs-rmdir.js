var fs = require("fs");

console.log("准备删除目录");
fs.rmdir("C:\\Users\\ewendia\\Documents\\Ericsson 20160530\\4 Knowledge Development\\68 nodejs\\037-file-makdir",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("读取目录");
   fs.readdir("C:\\Users\\ewendia\\Documents\\Ericsson 20160530\\4 Knowledge Development\\68 nodejs\\",function(err, files){
      if (err) {
          return console.error(err);
      }
      files.forEach( function (file){
          console.log( file );
      });
   });
});