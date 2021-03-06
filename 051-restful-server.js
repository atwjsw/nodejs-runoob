var express = require('express');
var app = express();
var fs = require("fs");

//deleteUser	DELETE	JSON 字符串	删除用户
app.get('/deleteUser/:id', function (req, res) {

	console.log('/deleteUser');
   // First read existing users.
   fs.readFile( __dirname + "/" + "051-users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + req.params.id];       
       console.log( data );
       res.end( JSON.stringify(data));
   });
});

//1	listUsers	GET	空	显示所有用户列表
app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "051-users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
});

// 2	addUser	POST	JSON 字符串	添加新用户
var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
};

app.get('/addUser', function (req, res) {
   // 读取已存在的数据
   fs.readFile( __dirname + "/" + "051-users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["user4"] = user["user4"];
       console.log( data );
       res.end( JSON.stringify(data));
   });
});

// 4:id	GET	空	显示用户详细信息*/
app.get('/:id', function (req, res) {
   // 首先我们读取已存在的用户
   fs.readFile( __dirname + "/" + "051-users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       var user = data["user" + req.params.id];
       console.log( user );
       res.end( JSON.stringify(user));
   });
});



var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});

/*基于以上数据，我们创建以下 RESTful API：
1	listUsers	GET	空	显示所有用户列表
2	addUser	POST	JSON 字符串	添加新用户
3	deleteUser	DELETE	JSON 字符串	删除用户
4	:id	GET	空	显示用户详细信息*/