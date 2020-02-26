
/////////////////////////////////////////////

console.log("Difference between map and object - start");
let a = {name : "sherlock", series : "sherlockholemes"};
let b = {name: "watson", series : "sherlock holmes"};

for(let key of Object.keys(a)){
	console.log(`${key}`);
}
//name
//series

let people = {};

people[a] = "Detective";
people[b] = "Doctor";

console.log(people[a], people[b]); //Doctor Doctor
console.log(a.name, b.name); //sherlock watson

let character = new Map();
character.set(a, "Detective");
character.set(b, "Doctor");

for (let [key, value] of character){
	console.log(`${key} = ${value}`); 
}
//[object Object] = Detective
//[object Object] = Doctor

console.log(character.get(a)); //Detective

for (let key of character.keys()){
	console.log(key);
}
//{name : "sherlock", series : "sherlockholemes"}
//{name: "watson", series : "sherlock holmes"}

for (let value of character.values()){
	console.log(value);
}
//Detective
//Doctor
console.log("Difference between map and object - end");

//////////////////////////////////////////////////

console.log("Difference between array and set - start");
let arrayIterable = ['a', 'b', 'c'];
arrayIterable.push('a');
for(let i of arrayIterable){
	console.log(i);
}


let set = new Set(arrayIterable);
console.log(set);

for (let value of set.entries()){
	console.log(value);
}
//["a", "a"]
//["b", "b"]
//["c", "c"]

let arrayOfObjects = [{name : "nidhi"}, {name : 'jack'}, {name : 'sparrow'}, {name : "nidhi"}];
console.log(arrayOfObjects);


let mappedObjects = arrayOfObjects.map((obj) => {
	return JSON.stringify(obj);
});

console.log(mappedObjects);

let newSet = new Set(mappedObjects);
console.log(newSet);

console.log("Difference between array and set - end");

//////////////////////////////////////////////////