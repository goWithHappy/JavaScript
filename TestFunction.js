var abs=function(x){
	if (x>0) {
		return x;
	}else{
		return -x;
	}
}
var arr=[1,2,3];
/*
alert(abs(-5));
//测试Argument
function foo(){
	for (var i = 0; i < arguments.length; i++) {
		alert(arguments[i]);
	};
}
foo(1,2,3);
//测试高阶函数
*/
/*
function add(x,y,z){
	return abs(x)+abs(y)+abs(z)
}

alert(add(-1,-2,13));
//测试Map()和reduce（）(两个参数)
function sum(x){
	return x+x;
}
var test=arr.map(sum);
for (var i = 0; i < test.length;i++) {
	alert(test[i]);
}
*/

function jia(x,y){
	return x+y;

var test02=arry.reduce(jia);
alert(test02[0])
// for (var i = 0; i < test02.length; i++) {
// 	alert(test02[i]);
// 	alert(test02.length)
// }