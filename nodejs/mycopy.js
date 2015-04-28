var fs = require('fs');
var file1 = process.argv[2];
var file2 = process.argv[3];
var stuff = "stuff";

fs.readFile(file1, function(err, data){
	if (err){
		console.log("unable to read file", file1, err);
	} else {
		stuff = data.toString();
		fs.stat(file2, function(err, stat) {
    		if(err == null) {
        		console.log('File already exists');
    		} else if(err.code == 'ENOENT') {
        		fs.writeFile(file2, stuff, function(err){
				if (err) throw err;
				console.log("It is finished.");
			})
		    } else {
		        console.log('Some other error: ', err.code);
		    }
		});
	}
});

console.log(stuff);
