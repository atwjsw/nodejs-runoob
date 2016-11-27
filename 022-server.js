var http = require("http");
var url = require("url");

//启动服务器，监听接口，处理请求
function start(route) {

	// 回调函数onRequest通过 request, response 参数来接收和响应数据
  function onRequest(request, response) {
  	//从request中获取请求地址
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(pathname);
    
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}

//使用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 8888 端口。 
//当收到请求时，执行回调函数onRequest。
http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

//模块函数输出
exports.start = start;

// 好了，我们的应用现在可以通过请求的URL路径来区别不同请求了--
// 这使我们得以使用路由（还未完成）来将请求以URL路径为基准映射到处理程序上。
// 在我们所要构建的应用中，这意味着来自/start和/upload的请求可以使用不同的代码来处理。
// 稍后我们将看到这些内容是如何整合到一起的。


