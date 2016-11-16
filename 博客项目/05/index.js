window.onload=function()
{
	//个人中心的js设置
	//第一个参数是鼠标移入时所触发的函数，第二个参数时鼠标移除时所触发的函数,
	//由于该函数是在某个HTML对象内部所触发，说以当前的this指代的是该HTML对象
	$().getClass('memeber').hover(function(){
		// 设置鼠标放上去时箭头的方向
		$(this).css('background','url(images/arrow2.png) no-repeat 65px center');
		//设置函数的显示与隐藏
		$().getTagName('ul').show();
	},function(){
		//鼠标离开时恢复原状
		$(this).css('background','url(images/arrow.png) no-repeat 65px center');
		$().getTagName('ul').hide();
	});

	//登录框的js设置
	var top=(document.documentElement.clientHeight-250)/2;
	var width=(document.documentElement.clientWidth-350)/2;
	$().getId('login').css('top',top+'px').css('left',width+'px');

	//保证在缩小窗口是登录窗口仍然居中,在加载页面时直接绑定了函数
	window.onresize=function(){
		//每次都应该动态的获取一次长和高
		top=(document.documentElement.clientHeight-250)/2;
		width=(document.documentElement.clientWidth-350)/2;
		$().getId('login').center(top,width);
	}

	//点击clos时关闭窗口
	$().getClass('close').click(function(){
		$().getId('login').css('display','none');
	});

	//登陆时出现登录框
	$().getClass('login').click(function(){
		$().getId('login').css('display','block');
	})
}