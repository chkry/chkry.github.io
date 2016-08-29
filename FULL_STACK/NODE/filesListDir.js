var fs = require('fs');
fs.readdir("TEST",function(err,files){
		if(err) throw err
		files.forEach(function(file){
			console.log(file);
		})
});