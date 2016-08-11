var fs = require('fs');

var text =
	fs.readFile('fsfile02.txt','utf8', 
		function(err, data){
		if(data)
			text = data;
		else{
			text = " 파일 이름 확인 하세요!!!";
		}
       }
);
//console.log(text);

setTimeout(function(){
	console.log(text);
}, 3000);

