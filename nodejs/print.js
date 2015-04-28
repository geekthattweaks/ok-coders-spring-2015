var fs = require('fs');
var filename = process.argv[2];

/*console.log("about to read call file");

console.log(process.argv);
*/
/*fs.readFile('test.js', function(err, data){
	if (err){
		console.log("unable to read file", "test.js", err);
	} else {
		console.log(data.toString());		
	}
});*/

fs.readFile(filename, function(err, data){
	if (err){
		console.log("unable to read file", filename, err);
	} else {
		console.log(data.toString());		
	}
});

exports.printFile = fs.readFile;
// console.log("after read file call");