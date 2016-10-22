var xiaoming = 
{
	name: '小明',
	birth: 1990,
	school: 'No.1 Middle School',
	height: 1.70,
	weight: 65,
	score: null
};
// console.log(xiaoming['name']);
// console.log(xiaoming.birth);
// console.log(score in xiaoming);
// if (1<2) {
// 	console.log('age<18');
// 	console.log('执行了if语句！');
// };
for(var key in xiaoming){
	console.log(key+":"+xiaoming[key])
}
//测试Interable的基本使用
var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (var x of a) { // 遍历Array
    console.log(x);
}
for (var x of s) { // 遍历Set
    console.log(x);
}
for (var x of m) { // 遍历Map
    console.log(x[0] + '=' + x[1]);
}

var a = ['A', 'B', 'C'];
a.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    console.log(element);
});
