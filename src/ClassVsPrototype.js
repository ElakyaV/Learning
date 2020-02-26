class X {
	get Y() {
  	return "hey";
  }
}

let x = new X();
//document.getElementById("result").innerHTML = x["get Y"]();
console.log(x);

////////////////////////////////////////////////////////////////////

function a(){
	console.log("console logs");
}

console.log(a.prototype);

////////////////////////////////////////////////////////////////


class PersonC  {
	constructor(name, id){
  	this.name = name;
    this.id = id;
  }
  
  getDetails(){
  	return `${this.name} :: ${this.id}`;
  }
}

let elakyaC = new PersonC("elakya", 123);
console.log(elakyaC.getDetails());

class EmployeeC extends PersonC {
	constructor(name, id, salary){
  	super(name, id);
  	this.salary = salary
  }
  
  getDetails(){
  	return `${this.name} :: ${this.id} :: ${this.salary}`;
  }
}

let elakyaEmpC = new EmployeeC("elakya", 123, "600000");
console.log(elakyaEmpC.getDetails());



let PersonP = function(name, id){
		this.name = name;
    this.id = id;
}

PersonP.prototype.getDetails = function(){
	return `${this.name} :: ${this.id}`;
}

let elakyaP = new PersonP("elakya", "321");
console.log(elakyaP.getDetails());

let EmployeeP = function(name, id, salary){
	PersonP.call(this, name, id); // super 
  this.salary = salary;
}

Object.setPrototypeOf(EmployeeP, PersonP.prototype);// extends

EmployeeP.prototype.getDetails = function(){
	return `${this.name} :: ${this.id} :: ${this.salary}`;
}

let elakyaEmpP = new EmployeeP("elakya", "321", "700000");
console.log(elakyaEmpP.getDetails());

//////////////////////////////////////////////////////////////






