//字母排序
var arry1=['Google','Apple','Microsoft'].sort();
alert('排序之后的结果为：'+arry1[0]+arry1[1]+arry1[2]);
//数字排序
var arry2=[10,20,1,2].sort();
alert('排序之后的结果为：'+arry2[0]+arry2[1]+arry2[2]);

//通过自定义函数来进行排序
var arry3=[10,20,1,2].sort(function(x,y){
	if (x<y) {
		return -1
	} else if(x>y){
		return 1;
	}else{
		return 0;
	}
}
);
alert('排序之后的结果为：'+arry3[0]+arry3[1]+arry3[2]);

//测试返回函数
function lazy_sum(arry){
	var sum=function(){
		return arry.reduce(function(x,y){
			return x+y;
		});
	}
	return sum;
}
var f=lazy_sum([1,2,3,4,5,6]);
alert(f());