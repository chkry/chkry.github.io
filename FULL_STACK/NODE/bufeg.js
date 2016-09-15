var http = require('http');
var bl = require('bl');
var path = require('path')

http.get(process.argv[2],function(response){

	response.on("error",console.error)
	// response.pipe(bl(function(err,data){
	// 	if(err) throw err
	// 		var data = data.toString();
	// 		console.log(data.length)
	// 		console.log(data);
	// }))
	response.on("data",function(err,data){

		response.pipe("chkry.txt");
	})

})
