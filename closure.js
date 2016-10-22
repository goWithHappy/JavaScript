
//测试js的闭包,当使用闭包时，如果直接将外部的变量引入到内部使用，可能会出现不可思议的问题
for (var i = 0; i < 10; i++) {
       (function(a) {
           // 变量 i 的值在传递到这个作用域时被复制给了 a,
           // 因此这个值就不会随外部变量而变化了
           setTimeout(function() {
               console.log(a);
           }, 1000);
       })(i); // 我们在这里传入参数来"闭包"变量
   }