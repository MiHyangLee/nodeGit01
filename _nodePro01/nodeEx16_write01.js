var fs = require('fs');

try {
	fs.writeFileSync('fsFile01.txt','Hello World2!', 'utf8');
	console.log('It\'s saved.');

} catch (e) {
	console.log(e);
}
try {
	var text = fs.readFileSync('fsFile01.txt','utf8');
	console.log(text);
} catch (e) {
	console.log(e);
}
