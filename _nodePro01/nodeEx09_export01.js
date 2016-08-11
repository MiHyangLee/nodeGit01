const PI = Math.PI;  // 2.14XXXXXX

exports.area = function (r){
	return PI * r * r;   // 공식
	
}

exports.circumference = function(r){
	return 2 *  r  * PI ;  // 둘레공식
}