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
		//解决画布不会随窗体变化的问题
		$().getId('screen').lock();
	}

	//点击clos时关闭窗口
	$().getClass('close').click(function(){
		$().getId('login').css('display','none');
		//解除遮罩锁定
		$().getId('screen').unlock();
	});

	//登陆时出现登录框
	$().getClass('login').click(function(){
		$().getId('screen').lock();
		$().getId('screen').css('display','block');
		$().getId('login').css('display','block');
	});

	//实现登陆框的拖拽
	var ODiv=document.getElementById('login');
	// 拖拽流程
	//1.先点下去
	//2. 点下去的物体被选中
	//3.抬起鼠标停止移动
	ODiv.onmousedown=function(e)
	{
		var e=e||window.event;
		//让鼠标点相对窗口位置不变
		var diffX=e.clientX-ODiv.offsetLeft;
		var diffY=e.clientY-ODiv.offsetTop;
		//鼠标按下时可以开始进行拖动
		document.onmousemove=function(e){
			var left=e.clientX-diffX;
			var top=e.clientY-diffY;
			if(left<0){
				left=0;
			}
			var e=e||window.event;
			//保证相对窗口位置不变
			ODiv.style.left=left+'px';
			ODiv.style.top=e.clientY-diffY+'px';
		}
		//鼠标弹起时恢复原状
		document.onmouseup=function(e)
		{
			document.onmousedown=null;
			document.onmousemove=null;
		}
	}
}