var fs = require("fs");

console.log("查看目录");
fs.readdir("C:\\Users\\ewendia\\Documents\\Ericsson 20160530\\4 Knowledge Development\\68 nodejs\\",function(err, files){
   if (err) {
       return console.error(err);
   }
   files.forEach( function (file){
       console.log( file );
   });
});