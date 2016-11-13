

//前台调用,在使用该封装库时，每次创建的都是新的对象
var $ = function () {
	return new Base();
}

//基础库,Base是构造函数其他属性是根据其来进行扩充的
function Base() {}

//创建一个数组，来保存获取的节点和节点数组,是一个全局变量用来保存产生的值
Base.prototype.elements = [];

//获取ID节点
Base.prototype.getId = function (id) {
	this.elements.push(document.getElementById(id));
	return this;
};

//获取元素节点数组
Base.prototype.getTagName = function (tag) {
	var tags = document.getElementsByTagName(tag);
	for (var i = 0; i < tags.length; i ++) {
		this.elements.push(tags[i]);
	}
	return this;
};

//获取CLASS节点数组
Base.prototype.getClass = function (className, idName) {
	var node = null;
	if (arguments.length == 2) {
		node = document.getElementById(idName);
	} else {
		node = document;
	}
	var all = node.getElementsByTagName('*');
	for (var i = 0; i < all.length; i ++) {
		if (all[i].className == className) {
			this.elements.push(all[i]);
		}
	}
	return this;
}


//获取某一个节点
Base.prototype.getElement = function (num) {	
	var element = this.elements[num];
	this.elements = [];
	this.elements[0] = element;
	return this;
};

//设置CSS
Base.prototype.css = function (attr, value) {
	for (var i = 0; i < this.elements.length; i ++) {
		if (arguments.length == 1) {
			if (typeof window.getComputedStyle != 'undefined') {//W3C
				return window.getComputedStyle(this.elements[i], null)[attr];
			} else if (typeof this.elements[i].currentStyle != 'undeinfed') {//IE
				return this.elements[i].currentStyle[attr];
			}
		}
		this.elements[i].style[attr] = value;
	}
	return this;
}

//添加class
Base.prototype.addClass=function(className)
{
	for(var i=0;i<this.elements.length;i++)
	{
		//如果原来的elements数组中的某个属性没有改class，则为该属性添加该class
		if(!this.elements[i].className.match(new RegExp('(\\s|^)' + className + '(\\s|$)')))
		{
			this.elements[i].className+=''+className;
		}
	}
	return this;
}

//移除Class,操作Class
Base.prototype.removeClass=function(className){
	for(var i=0;i<elements.length;i++)
	{
		if(this.elements[i].className.match(new RegExp('(\\s|^)' + className + '(\\s|$)')))
		{
			//将原来的class用空字符替代
			this.elements[i].className = this.elements[i].className.
				replace(new RegExp('(\\s|^)' + className + '(\\s|$)'), ' ');
		}
	}
	return this;
}

//设置link或者style中的CSS规则
Base.prototype.addRule=function(num,selectorText,cssText,position)
{
	var sheet = document.styleSheets[num];
	if (typeof sheet.insertRule != 'undefined') {
		sheet.insertRule(selectorText + "{" + cssText + "}", position);
	} else if (typeof sheet.addRule != 'undefined') {
		sheet.addRule(selectorText, cssText, position);
	}
}

//移除link和CSS规则
Base.prototype.removeRule=fucntion(num,index)
{
	var sheet=document.styleSheets[num];
	if(typeof sheet.deleteRule!='undefined')
	{
		sheet.deleteRule(index);
	}
	else if(typeof sheet.removeRule)
	{
		sheet.removeRule(index);
	}
}
//设置innerHTML
Base.prototype.html = function (str) {
	for (var i = 0; i < this.elements.length; i ++) {
		if (arguments.length == 0) {
			return this.elements[i].innerHTML;
		}
		this.elements[i].innerHTML = str;
	}
	return this;
}

//触发点击事件,为每一个元素都绑定事件
Base.prototype.click = function (fn) {
	for (var i = 0; i < this.elements.length; i ++) {
		this.elements[i].onclick = fn;
	}
	return this;
}


















