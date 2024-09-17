// We use const for constant value and for variables values we have let and var 
// But we don't use var because of scoping issue for example for loop variable 

/*
Prefer not to use var because issues in block scope and functional scope 
*/

//***************************************************************************************

const accountId = 155431
let accountEmail = "aknikhil@duck.com"
var accountPassword = "123456"
accountCity = "Amravati"
let accountState;
// accountId = 2

console.log(accountId);

accountEmail = "ak.nikhilsa@gmail.com"
accountPassword = "654321"
accountCity = "Pune"

console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


