var http = require('http');

http.get(process.argv[2],function(response){

	var array=[];
	response.setEncoding('utf8');
	response.on('error',console.error);
	response.on('data',function(input){
		array.push(input);
	})
	response.on('end',function(){
		var data = array.join("");
		console.log(data.length);
		console.log(data);
	})
})
