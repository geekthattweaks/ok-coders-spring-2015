var http = require('http'),
    fs = require('fs');



  var server = http.createServer(function (req, res) {

    //Sets site to the requested URL, but removes the first character "/"
    var site = (req.url).substr(1);

    //Debug - DOES IT FUCKING WORKING?
    console.log(site);



    fs.readFile(site, {encoding: 'utf8'}, function(err, data) {
      if (err) {
        res.writeHead(200, {'Content-Type': 'text/plain'});

        //Site is the requested URL
        res.end("Unable to read file " + site);
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});

        //Data is the requested URL
        res.end(data);
      }
    });
  });

  // Begin listening for requests at the localhost address on port 3000

  server.listen(3000, '127.0.0.1');
  console.log('Web server running at http://127.0.0.1:3000/');