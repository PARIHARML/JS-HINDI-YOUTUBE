const score = 400
console.log("OUTPUT AAYEGA =",score);// here by default score is a number type//

const balance = new Number(100)// But here case is different because here specifically we defining new object as a Number type thats y in o/p it going to show us "100 is a number type"  with the help of new keyword//

//new keyword ki help se hm new object  define kar skte h jiski wajh se hame output pe jo kuch v aayega wo hame batayega ki ye kis type ka output Hai example => string type or number type or etc.//

console.log("OUTPUT AAYEGA =",balance);

console.log("OUTPUT AAYEGA =",balance.toString());//here i am converting number into string so here 100 is string noW//
console.log("Length Of String =",balance.toString().length);//here i am converting number into string//

console.log("OUTPUT AAYEGA =",balance.toFixed(2));

const otherNumber = 123.8956
console.log("OUTPUT AAYEGA =",otherNumber.toPrecision(5));

const hundreds = 1000000
console.log("OUTPUT AAYEGA =",hundreds.toLocaleString('en-IN'));//now it return numbers in indian standard (10,00,000)//

//++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++//


console.log("OUTPUT AAYEGA =",Math);
// console.log("OUTPUT AAYEGA =",Math.abs(-4));//it returns Absolute value means It convert negative value in the Positive value (-4)--->(4)//

// console.log("OUTPUT AAYEGA =",Math.round(4.4));
// console.log("OUTPUT AAYEGA =",Math.ceil(4.2));
// console.log("OUTPUT AAYEGA =",Math.floor(4.9));
// console.log("OUTPUT AAYEGA =",Math.sqrt(25));
// console.log("OUTPUT AAYEGA =",Math.pow(25,2));
// console.log("OUTPUT AAYEGA =",Math.pow(5,3));
// console.log("OUTPUT AAYEGA =",Math.min(5,3,6,8,10));
// console.log("OUTPUT AAYEGA =",Math.max(5,3,6,8,10));

console.log("OUTPUT AAYEGA =",Math.random());

console.log("OUTPUT AAYEGA =",Math.random()*10);
// console.log("OUTPUT AAYEGA =",Math.random()*100);//here there is a chance output comes Zero as well (0) thats y i m going to add 1 in ((math.random()*10) +1) So now our output never comes zero , from now our output will be be minmum 1.// 

console.log("OUTPUT AAYEGA =",(Math.random()*10) + 1);
console.log("OUTPUT AAYEGA =",Math.floor(Math.random()*10) + 1);// it gives single lowest value if we dont want big value i decimal form//

const min = 10
const max = 20

console.log(Math.floor((Math.random()*(max - min)+1) + min));