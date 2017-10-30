

//继承
var A = function() {
    this.name = 'a'
}
A.prototype.show1 = function() {
    console.log('show')
}
// console.log(A.prototype.constructor)
var B = function() {
    A.call(this);
    this.age = 1    
}
extend(B, A);



var b = new B();




b.toString = function(){}

var ccc = get__fun__(window,'toString');

console.log(ccc )

// console.log(Object.prototype.hasOwnProperty('toString'))