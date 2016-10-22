var abs=function(x)
{
	// if (typeof x !='number') {throw 'Not a number!';}
	if (x>0) {return x;}
	else return -x;
}

console.log(abs(-1));

//javaScapit允许向函数中传入多个参数
console.log(abs(-1,-2,-2));

//通过类型检查来消除undefine
// abs();

//通过arguments来判断参数的个数
console.log('**********************');
function foo(x)
{
	console.log(arguments.length);
}
foo(1,2,3);

console.log('*************')
//变量提升测试,Node.js不支持
var change=function(){
	var y='Bob';
	var x='hello!'+y;
	console.log(x);
};
change();
