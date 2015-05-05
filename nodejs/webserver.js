var http = require("http");
var url = require("url");
var path = require("path");
var fs = require("fs");

/*var server = http.createServer(function(req, res){
	console.log(req.url);

	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("Hello World\n");



});*/

function readFileFunction(res){
	return function (err, data) {
		        if (err) {
		            res.writeHead(200, {'Content-Type': 'text/plain'});
		            res.end("Unable to read file index.html\n");
		        } else {
		            res.writeHead(200, {'Content-Type': 'text/html'});
		            res.end(data.toString());
		        }
	    	}

}

function serverFunction(req, res) {
    console.log(req.url);
    fs.readFile('index.html', readFileFunction);
}



var server = http.createServer(serverFunction);
server.listen(3000, "127.0.0.1");