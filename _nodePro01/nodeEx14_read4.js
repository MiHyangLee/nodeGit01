var fs = require('fs');
try {
	var text = fs.readFileSync('fsfile02.txt','utf8');
	console.log(text);
} catch (e) {
	console.log("예외 발생. 파일 확인 하세요.");
}


//console.log(text);