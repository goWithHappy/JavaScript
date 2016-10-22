'use strict';

function string2int(s) {

var m=new Map([['0',0],['1',1],['2',2],['3',3],['4',4],['5',5],['6',6],['7',7],['8',8],['9',9]]);
var result=s.reduce(function(x,y)
	{
        var a=m.get(x);
        var b=m.get(y);
		return a+10*b;
	});
    return result;
}

// 测试:
if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
    if (string2int.toString().indexOf('parseInt') !== -1) {
        alert('请勿使用parseInt()!');
    } else if (string2int.toString().indexOf('Number') !== -1) {
        alert('请勿使用Number()!');
    } else {
        alert('测试通过!');
    }
}
else {
    alert('测试失败!');
}