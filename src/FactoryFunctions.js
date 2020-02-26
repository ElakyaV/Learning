let array = [1, 2, 3, 4, 5];

function reverse(array){
  return array.map((item,idx) => array[array.length-1-idx])
}
console.log(reverse(array));

const variableName = () => "foo";
console.log(variableName());

const variableName1 = () => { foo : "bar"}
console.log(variableName1());

const variableName2 = () => ( {foo : "bar"})
console.log(variableName2());

const function1 = ({name, age}) => {
	console.log(`${name} ${age}`);
}
const user = {name : "elakya", age: "27"};
function1(user);

const swapArray = ([ first, second]) => [second, first];
console.log(swapArray([1,2]));

const arrToObj = ([key, value]) => ({[key] : value})
console.log(arrToObj(["foo", "bar"]));

const createUser = ({name, avatar}) => ({
	user : name,
  avatar : avatar,
  
  setUserName(){
  	this.name = name;
  }
});
console.log(createUser({name : "elakya", avatar: "avatar1"}));

const createUserWithDefaultParam = ({name = "darling", avatar = "avatar2"} = {}) => ({
	user : name,
  avatar : avatar,
  
  setUserName(){
  	this.name = name;
  }
});
console.log(createUserWithDefaultParam());