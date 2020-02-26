function outer(a){
	function inner(b){
  	console.log(a,b);
  }
  return inner("inner")
}

outer("outer");

function outer1(a){
	fun = function inner1(b){
  	return a + b;
  }
  return fun("inner1");
}

console.log(outer1("outer1"));

///////////////////////////////////////////