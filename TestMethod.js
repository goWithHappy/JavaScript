// //测试方法的基本使用,this的指向问题
// 'use strict'
// function getAge()
// {
// 	var y=new Date().getFullYear();
// 	return y-this.birth;
// }

// //js中的对象相当于一个json数据
// var xiaoming={
// 	name:"小明",
// 	birth:1900,
// 	age:getAge
// };

// console.log(xiaoming.age());
// console.log('************');
// console.log(getAge());
// var fn=xiaoming.age;
// console.log(fn());
//通过that捕捉this解决指向问题
var getRAge=function()
{
	var that=this;
	var getAge=function()
	{
		var y=new Date().getFullYear();
		return y-that.birth;
	}
	return getAge();
}

var tom={
	name:'tom',
	birth:1991,
	age:getRAge
};
console.log('********');
console.log(tom.age());

//使用apply（）修复this的指向问题
//apply()接受两个参数一个指的是this，一个指的是函数所需要的参数
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};
console.log('**********');
console.log(xiaoming.age());
//注：nodejs无法测call（）以及apply（）
// console.log(getAge().call(xiaoming));

//使用装饰器修改函数的功能
var count=0;
var oldParseInt=parseInt;	//保存原函数

window.parseInt=function()
{
	count++;
	return oldParseInt.apply(null,arguments);
}
// 测试:
parseInt('10');
parseInt('20');
parseInt('30');
console.log(count);