// 2 types of data type in js (1). primitve data type(call by value ) (2). Non primitive data types ALSO CALLED "reference typE"//

// (1).PRIMITIVE DATA TYPES ARE 7 TYPES : STRING, NUMBER, BOOLEAN , NULL, UNDEFINED, SYMBOL, BigInt,  

const score = 100
const scoreValue = 100.3
const isloggedIn = false
const ousideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log("OUTPUT =",(id === anotherId));

const bigNum = 45799987765654455665n//if we add "n" in the end of big num ,so it considered as bugInt//
// Reference (Non Primitive)

// Array , Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
 let myObj = {  
     name : "Naveen",
      age : 26
}
console.log(["OUTPUT =",typeof heros]);
console.log(["OUTPUT =", heros]);
console.log("OUTPUT =", myObj);
console.log("OUTPUT =",typeof myObj);


const myFunction = function(naagraj) {
    console.log("Hello World");
}

console.log("OUTPUT =",typeof myFunction);
console.log("OUTPUT =",typeof bigNum);
console.log("OUTPUT =",typeof Object);
