//foreach loop over map object

let map  = new Map([
    ['first_name', 'John'],
    ['last_name', 'Eneojo'],
    ['email','johneneojo1@gmail.com']
])

map.forEach(mapFunc);

function mapFunc(values, keys, callingMap){
    console.log(keys +" "+ values);
}
