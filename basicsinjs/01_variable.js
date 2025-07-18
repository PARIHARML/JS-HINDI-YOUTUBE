const accountId = 1414//value never change in future//
let accountEmail = "parihar@google.com"
var accountPassword ="12345"
let accountState;
accountCity = "Rewa"
accountCity = "Raipur Karchuliyan"

// accountPassword ="54321"
// accountEmail = "parihar@microsoft.com"
// accountCity = "Raipur Karchuliyan"
// accountId = 2//not allowed //
console.log(accountId);
// console.log(accountEmail);
// console.log(accountCity);
// console.log(accountPassword);

/*
prefer not use to var 
because if issue in block scope and functional scope
*/

console.log([accountId,accountEmail,accountPassword,accountCity]);
console.table([accountId,accountEmail,accountCity,accountPassword,accountCity,accountState]);