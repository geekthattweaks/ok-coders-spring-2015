/*var fs = require('fs');
var filename = process.argv[2];

fs.readFile(filename, function(err, data){
	if (err){
		console.log("unable to read file", filename, err);
	} else {
		console.log(data.toString());		
	}
});
*/

var print = require('./print');

print.printFile(process.argv[2]);