var fs = require('fs')

module.exports = function(dirname, filter, callback) {
var regex = new RegExp('\\.' + filter + '$')    

var filelist = [];
var i = 0

fs.readdir(dirname, function (err, list) {

    if (err) {
    return callback(err);
    }
    else list.forEach(function (file) {
    	for(i=0;i<list.length;i++){
    		    if (regex.test(file))
        		filelist[i] = file;
    	}
    })
    return callback(null, filelist)

})

};