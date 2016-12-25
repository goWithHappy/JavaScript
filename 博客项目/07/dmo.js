// //传统的DOM加载需要图片加载完成之后才能执行js中的内容
// window.onload=function()
// {
// 	var box=document.getElementById('box');
// 	alert(box.innerHTML);
// };

// //现代DOM加载,先执行节点操作的内容然后再缓缓的加载图片
// addEvent(document,'DOMContentLoaaded',function()
// {
// 	var box=document.getElementById('box');
// 	alert(box.innerHTML);
// });
//IE模拟DomControlLoad
document.write('<script id='ie_load' defer="defer" src="javascript:void(0)"><script>');
var ie_load=document.getElmentById('ie_load');
//判断是否完全加载完成DOM
ie_load.onreadystatechange=function()
{
	if(this.readyState=='complete'){
		var box=document.getElementById('box');
		alert(box.innerHTML);
	}
}