//测试js的for..in和for of
var a=['a','b','c'];
var b=new Set(['1','2','3']);
var c=new Map([['tom',10],['jane',20]]);

//不是其元素的值，不会被遍历
a.name='tom';
for(var x of a)
{
	console.log(x);
}

console.log("****************");
// 不是其元素的值，它也进行了遍历
a.name='tom';
for(var x in a)
{
	console.log(a[x]);
}
console.log("***************");
//使用iterable的内置方法forEach进行
a.forEach(function (element,index,array)
{
	//element:只想当前元素的值
	//index：只想当前索引
	//array：指向array对象本身
	console.log(element);
});

console.log('****************');
//测试set的遍历
b.forEach(function(element,index,array)
{
	//由于set没有索引所以前两个参数都是指向元素本身
	console.log(element);
});

