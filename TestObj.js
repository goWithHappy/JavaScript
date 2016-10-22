//注意在js中没有类的概念只有原型的概念，对象通过原型继承来实现相当于类的东西
var student={
	name:'Robet',
	height:1.2,
	run:function(){
		console.log(this.name+'is runing');
	}
};

//原型继承stduent(首先要保证xiaoming是一个对象然后才能进行原型继承),在原型继承之前先将需要覆盖的属性写好
var xiaoming={
	name:'xiaoming '
};

xiaoming.__proto__ = student;
xiaoming.name='tom';
xiaoming.run();

console.log('***********');
//通过create（）函数来创建原型对象
function createStudent(name){
	var s=Object.create(student);
	//初始化新对象
	s.name=name;
	return s;
}

var liming=createStudent('liming');
liming.run();

console.log('***************');
//通过new来创建对象,该构造函数不能与已有的构造函数重名
function Student(name){
	 this.name=name;
	 this.run=function () {
		console.log(this.name+'is go...');
	}
}

// function Student(name) {
//     this.name = name;
//     this.run = function () {
//         console.log('run, ' + this.name + '!');
//     }
// }
var tom=new Student("tom");
tom.run()


