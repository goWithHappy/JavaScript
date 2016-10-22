function $(){
	return new Base();
}

//封装成后缀式
function Base(){
	//创建一个数组用来封装节点和节点数组
	this.elements=[]; //使用this创建相当于非静态变量，通过var创建相当于静态全局变量
	// 获取ID节点
	this.getId=function(id){
		this.elements.push(document.getElementById(id));
		return this;
	}
	//通过Tag获取节点
	this.getTagName=function(tag){
		var tags=document.getElementsByTagName(tag);
		for (var i = 0; i < tags.length; i++) {
			this.elements.push(tags[i]);
		}
		return this;
	}
}

//封装一些连缀操作的方法
Base.prototype.css=function(attr,value){
	for (var i = 0; i < this.elements.length; i++) {
		//如果传入一个参数，返回attr对应的属性值
		if (arguments.length==1) {
			return this.elements[i].style[attr];
		}
		this.elements[i].style[attr]=value;
	}
	return this;
}

Base.prototype.html = function (str) {
	for (var i = 0; i < this.elements.length; i ++) {
		if (arguments.length==1) {
			return this.elements[i].innerHTML;
		}
		this.elements[i].innerHTML = str;
	}
	return this;
}

Base.prototype.click = function (fn) {
	for (var i = 0; i < this.elements.length; i ++) {
		this.elements[i].onclick = fn;
	}
	return this;
}
