function toStringOver(e){return Object.prototype.toString.call(e)};
function classOf(e){return e===null?'null':e===undefined?'undefined':toStringOver(e).slice(8,-1).toLowerCase()};



function isFunction(e){var s='function';return typeof e===s?classOf(e)===s:false};




console.clear();
//
var m=[window.alert,undefined,null,
""," ","foo",new String("foo"),Infinity,
0,1,1.2,new Number(1.2) ,
false,true,new Boolean(true),
[],[[]],[1,2,3],new Array(1, 2, 3),
/abc/g ,new RegExp("meow"),
{},new Object(),
alert,new Function(""),
Date(),new Date(),
Error(),new Error()];
//
m.forEach(function(x,j){
console.log(isFunction(x));
});



