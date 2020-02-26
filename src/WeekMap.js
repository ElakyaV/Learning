let unsorted = [ 7, 4, 3, 3, 4, 8, 6, 9, 2, 10, 7, 19, 0, 8, 6, 14 ];
let sorted = unsorted.sort(function(a, b){return a - b});
console.log(sorted);

const duration = 0 || null;
console.log(duration);

const wm1 = new WeakMap(),
      wm2 = new WeakMap(),
      wm3 = new WeakMap();
const o1 = {},
      o2 = function() {},
      o3 = window;

wm1.set(o1, 37);
wm1.set(o2, 'azerty');
wm2.set(o1, o2); // a value can be anything, including an object or a function
wm2.set(o3, undefined);
wm2.set(wm1, wm2);

console.log(wm2.get(wm1));


let Employee = {
  company: 'xyz'
}
var emp1 = Object.create(Employee);
delete emp1.company
console.log(emp1);


var trees = ["redwood","bay","cedar","oak","maple"];
delete trees[3];
console.log(trees);


let userInfo = {
  name: "Mayank Gupta",
  age: 30,
  designation: "Developer"
}

let cloneData = { ...userInfo };
cloneData.newKey = "newValue";

cloneData.name = "Anshul Gupta";


if(cloneData == userInfo) {
  console.log("both are same");
  console.log(userInfo);
}


let arrayInfo = [1, 2, 3];
let cloneArrayInfo = [ ...arrayInfo];
cloneArrayInfo.push(4);

if(cloneArrayInfo == arrayInfo){
	console.log("same array");
  console.log(arrayInfo);
}

