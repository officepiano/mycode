//原型相关


//继承
var A = function() {
    this.name = 'a'
}
A.prototype.show = function() {
    console.log('show')
}
// console.log(A.prototype.constructor)
var B = function() {
    A.call(this);
    this.age = 1    
}
extend(B, A)



//b.prototype 是a的实例
console.log(B.prototype instanceof A)


var b = new B();


//找出原型链
var o = get__proto__(window);
console.log(o)
get__proto__.proArr = []


//A是B的父类
//b是B的实例
// 原型链为 B.prototype  A.prototype  Object.prototype
//b.__proto__ == B.prototype
// console.log(B.prototype.constructor.name)
console.log(b.__proto__ == B.prototype)
//B.prototype.__proto__ == A.prototype
console.log(B.prototype.__proto__ == A.prototype)

//A.prototype.__proto__ == Object.prototype
console.log(A.prototype.__proto__ == Object.prototype)

//






