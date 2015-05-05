var http = require("http");
var fs = require("fs");
var path = require("path");

var server = http.createServer(function (req, res) {
    console.log(req.url);
    var url = req.url;
    var filepath = path.join("public", url) 
    console.log(req.path);
    console.log(filepath);

    fs.readFile(filepath, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end("Unable to read file" + filepath);
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data.toString());
        }
    });
});