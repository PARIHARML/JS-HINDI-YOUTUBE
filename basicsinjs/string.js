const name = "NaveenParihar"
const repoCount = 50

// console.log([name +  repoCount  + "value"]); this symtax is outdated for adding two string(means concatinating two string) in the modern days.

console.log(`Hello my NAme iS ${name} and MY repo count is ${repoCount}`);

const gameName = new String('Naveensp@parihar')//new keyword ka use kar k hm object use karte java script k andr//

console.log("OUTPUT AAYEGA =",gameName);
console.log("OUTPUT AAYEGA =",gameName[1]);
console.log("OUTPUT AAYEGA =",gameName[0]);

console.log("OUTPUT AAYEGA =",gameName.__proto__);

console.log("OUTPUT AAYEGA =",gameName.length);
console.log("OUTPUT AAYEGA =",gameName.endsWith("sp"));
console.log("OUTPUT AAYEGA =",gameName.startsWith("Nb"));
console.log("OUTPUT AAYEGA =",gameName.toLowerCase());
console.log("OUTPUT AAYEGA =",gameName.toUpperCase());
console.log("OUTPUT AAYEGA =",gameName.charAt('2'));
console.log("OUTPUT AAYEGA =",gameName.indexOf('e'));
console.log("OUTPUT AAYEGA =",gameName.slice(0,7));
console.log("OUTPUT AAYEGA =",gameName.slice(1,7));
console.log("OUTPUT AAYEGA =",gameName.slice(2,7));//With he help of  slice we can add negative value as well but in subtring we can't.
console.log("OUTPUT AAYEGA =",gameName.replace("sp","@1414"));

const url = "https://parihareng.com/naveen%20parihareng/home"

console.log("OUTPUT AAYEGA =",url.replace("%20","--"));
console.log("OUTPUT AAYEGA =",url.includes ('naveen'));
console.log("OUTPUT AAYEGA =",url.includes ('singh'));

const newString0 = gameName.substring(0,7)
const newString1 = gameName.substring(1,7)
const newString2 = gameName.substring(2,7)

console.log("OUTPUT AAYEGA =",newString0);
console.log("OUTPUT AAYEGA =",newString1);
console.log("OUTPUT AAYEGA =",newString2);

const gameName1 = String('Naveen-sp-@parihar')

console.log(gameName1.split('-'));

const givenString = String('I am naveen now i am studying webdevelopment')

const printString = givenString.split(' ')

console.log(printString[7]);


