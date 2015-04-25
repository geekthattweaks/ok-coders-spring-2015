var http = require("http");

var server = http.createServer(function(req, res){
	console.log(req.url);

	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("Hello World\n");
});

server.listen(3000, "127.0.0.1");