var server = require("./022-server");
var router = require("./022-router");

server.start(router.route);