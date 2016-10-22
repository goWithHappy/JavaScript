//测试Generator的使用
function *fib(max)
{
	var t,
	a=0,
	b=1,
	n=1;//n用来记录yield返回的次数
	while(n<=max)
	{
		yield a;
		t=a+b;
		a=b;
		b=t;
		n++;
	}
	return a;
}

//注意要使用for of来进行迭代的运算
for(var ele of fib(5))
{
	console.log(ele);
}