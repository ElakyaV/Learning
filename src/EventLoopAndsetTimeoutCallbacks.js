console.log("eventloop, task queue and setTimeout - start")
console.log("hi");
setTimeout(function(){
	console.log("setTimeut");
}, 1000);

setTimeout(function(){
	console.log("setTimeut1");
}, 20);

setTimeout(function(){
	console.log("setTimeut2");
}, 0);
console.log("there");
console.log("eventloop, task queue and setTimeout - end")

///////////////////////////////////////////////////

console.log("Functions - start");
function f1(){
	console.log("I am function");
}

setTimeout(function(){
	console.log("I am anonymous function and i can only be used as a callback functions");
}, 1000);

let functionVar = function(){
	console.log("I am inline function");
}
console.log("Functions - end");

/////////////////////////////////////////////////