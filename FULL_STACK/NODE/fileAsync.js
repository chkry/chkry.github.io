var fs = require("fs");

var buff = fs.readFile(process.argv[2],"utf8",function(err,data){
			if(err) throw err;
			var str = data.split('\n').length-1;
			console.log(str);

});
