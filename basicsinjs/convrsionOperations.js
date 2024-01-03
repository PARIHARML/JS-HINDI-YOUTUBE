let score = "33abc"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(["OUTPUT =" , typeof valueInNumber]);
// console.log(["OUTPUT =" ,  valueInNumber]);

// "33" => 33
// "33abc" => NaN(Not a Number)
// true => 1, 
// false => 0, 

let isLoggedIn = 1

let BooleanIsLoggedIn = Boolean(isLoggedIn)
// console.table([BooleanIsLoggedIn]);
// console.table([isLoggedIn]);

// "1" => true
// "" => false
// "Hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log([stringNumber]);
// console.log([typeof stringNumber]);

//************************ Operation *************************//

let value = 3
let negativeValue = -value

// console.log("OPTPUT =" ,negativeValue);
// console.log("OPTPUT =" ,3 + 3);
// console.log("OPTPUT =" ,3 - 3);
// console.log("OPTPUT =" ,3 * 3);
// console.log("OPTPUT =" ,3 ** 3);
// console.log("OPTPUT =" ,3 / 3);
// console.log("OPTPUT =" ,2 % 3);

let str1 = "Hello!!!"
let str2 = " NAveen parihar"

let str3 = str1 + str2;

// console.log("OUTPUT =",str3);

// console.log("OUTPUT =","1" + 2);
// console.log("OUTPUT =",1 + "2");
// console.log("OUTPUT =","1" + "2");
// console.log("OUTPUT =","1" + "2" + 2);
// console.log("OUTPUT =","1" + 2 + 2);
// console.log("OUTPUT =","1" + 2 + "2");
// console.log("OUTPUT =",1 + 2 + "2");

// console.log("OUTPUT =", ((3 + 7) * "2") % 3);

// console.log("OUTPUT =",true);
// console.log("OUTPUT =",+true);
// console.log("OUTPUT =",-true);
// console.log("OUTPUT =","");
// console.log("OUTPUT =",-"");
// console.log("OUTPUT =",+"");

let num1,num2,num3

num1 = num2 = num3 = 2 + 2;
// console.log("OUTPUT =",num1);

let gameCounter1 = 100
let gameCounter2 = ++gameCounter1;
let gameCounter3 = gameCounter1--;
// ++gameCounter;
// --gameCounter;
// gameCounter++;
// gameCounter--;

console.log("OUTPUT =", [gameCounter1,gameCounter2]);
console.log("OUTPUT =", [gameCounter1,gameCounter2,gameCounter3]);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html
