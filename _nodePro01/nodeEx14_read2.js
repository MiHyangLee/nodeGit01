var fs = require('fs');

var text ; 
	fs.readFile('fsfile02.txt','utf8', 
		function(err, data){
			//return data;
			console.log(data);
			text =  data;
       }
);
console.log(text);

setTimeout(function(){
	console.log(text);
}, 3000);

