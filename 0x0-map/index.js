
//working with map

//declearing  map variable

let myMap = new Map();
// set keys and values  to the map variable


myMap.set('fname', 'John');

myMap.set('lname','Eneojo');

//retrieve values

console.log(myMap.get('fname'));

console.log(myMap.get('lname'));


// knowing how many keys exist in the map

console.log(myMap.size);


//determine if map has a key value

console.log(myMap.has('fname'));


//removing keys values pairs
myMap.delete('fname');


//check if exit

console.log(
    myMap.has('fname'));

//clear map value keys 

myMap.clear();


//and ways to use object with map

let obj1 = {};
let obj2 = {};

myMap.set (obj1, 30);

myMap.set(obj2, 50);

console.log(myMap.size)

console.log(myMap.get(obj1));
