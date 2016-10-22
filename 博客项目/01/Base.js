// 封装一些常用的js代码

// //函数式
// function $(id){
// 	return document.getElementById(id);
// }
//对象式
var Base={
	getId : function(id){
		return document.getElementById(id);
	},
	getName : function(name){
		return document.getElementByName(name);
	},
	getTag : function(tag){
		return document.getElementByTagName(tag);
	}
}