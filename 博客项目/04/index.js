window.onload=function()
{
	//第一个参数是鼠标移入时所触发的函数，第二个参数时鼠标移除时所触发的函数,
	//由于该函数是在某个HTML对象内部所触发，说以当前的this指代的是该HTML对象
	$().getClass('memeber').hover(function(){
		// 设置鼠标放上去时箭头的方向
		$(this).css('background','url(images/arrow2.png) no-repeat 65px center');
		$().getTagName('ul').show();
	},function(){
		//鼠标离开时恢复原状
		$(this).css('background','url(images/arrow.png) no-repeat 65px center');
		$().getTagName('ul').hide();
	});
}w