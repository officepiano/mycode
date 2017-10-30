
//继承
var extend = function(sup, bass) {
    var F = function() {

    }
    F.prototype = bass.prototype;

    sup.prototype = new F();

    sup.prototype.constructor = sup;
}
//找原型链

var get__proto__ = function(o){
	
	if(o.__proto__){
		arguments.callee.proArr.push(o.__proto__.constructor.name + '.prototype');
		arguments.callee(o.__proto__)
	}
	return arguments.callee.proArr
}
get__proto__.proArr = [];

//找出对象调用的方法来自哪
var get__fun__ = function(o,fun){
	if(o==null){
		return arguments.callee.r
	}
	if( o.hasOwnProperty(fun)  ){
		arguments.callee.r = {
			constructorName : o.constructor.name,
			obj : o,
			constructor : o.constructor
		}
		
		
	}else{
		arguments.callee(o.__proto__,fun)
	}
	return arguments.callee.r;
}
get__fun__.r = false;





