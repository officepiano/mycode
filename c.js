var arr = 1;  
// arr.toString = function () {  
//     alert("你调用了toString函数");  
// }  

console.log(arr instanceof Number)


var  a = function(){

}
a.prototype.show = function(){

}

var b = new a();

console.log(b.show == a.prototype.show)






// return
// var arr = [1,2,3];  
// // arr.toString = function () {  
// //     console.log("你调用了toString函数");  
// // }  


// console.log(arr.valueOf() == '1,2,3'); 


// return



// var aaa = new Array('11')

// console.log(Array.isArray(aaa.valueOf()))

// console.log(typeof(aaa))
// console.log(typeof(aaa.valueOf()))
// console.log(typeof(aaa.toString()))
// console.log(aaa == aaa.valueOf())
// console.log(aaa === aaa.valueOf())
// console.log(aaa.valueOf() ==  aaa.toString())
// console.log(aaa.valueOf() === aaa.toString())



// console.log(Function.__proto__ == Function.prototype)
// console.log(Array.__proto__ == Function.prototype)
// console.log(Array.__proto__.__proto__ == Object.prototype)
// var a = new Array('addd');


// console.log(a.__proto__ == Array.prototype)
// console.log(Array.prototype.__proto__ == Object.prototype)
// console.log(a.__proto__.__proto__ == Object.prototype)

// Array.prototype.min = function() {
//     var min = this[0];
//     for (var i = 1; i < this.length; i++) {
//         if (this[i] < min) {
//             min = this[i];
//         }
//     }
//     return min;
// };
// var arr = ['ccc'];

// for (var i in arr) {
//     console.log(i)
//     // console.log(arr.hasOwnProperty(i))
//     // console.log(arr.hasOwnProperty(i))
// }
// console.log(total);   // 103




// var arr = [1, 56, 34, 12];
// var total = 0;
// console.log(arr.length)



// console.log(total); // NaN


// var extend = function(sup, bass) {
//     var F = function() {

//     }
//     F.prototype = bass.prototype;

//     sup.prototype = new F();
//     console.log(sup.prototype.constructor)
//     // sup.prototype.constructor = sup;
// }

// var A = function() {
//     this.name = 'a'
// }
// A.prototype.show = function() {
//     console.log('show')
// }
// // console.log(A.prototype.constructor)
// var B = function() {
//     A.call(this);
//     this.age = 1    
// }
// extend(B, A)
// B.prototype.show2 = function() {};

// var b = new B();
// // console.log(b)
// console.log(A.prototype == B.prototype.__proto__)

