// declear map object

let myMap = new Map([
    ['fristName', 'John'],
    ['lastName','Eneojo'],
    ['email','johnneojo1@gmail.com']
]);

// retrive the keys values pairs

for(let key of myMap.keys()){
    console.log("keys : " + key);
}


//retrieving the values only

for (let value of myMap.values()){
    console.log("value :" + value);
}


//getting both the keys and value

for(let entry of myMap.entries()){
    console.log(`${entry[0]} -> ${entry[1]}`);
}


//using destructure

for (let [key,  value] of myMap.entries()){
    console.log(`${key} => ${value}`);
}


	
