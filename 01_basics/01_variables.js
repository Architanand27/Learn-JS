const accountId=123 //if we use "const" then value cannot changes
let accountEmail="archit@gmail.com"
var accountPass="Ar123" // don't use var, it has some issue

userCity="Jaipur" // we can create a variable withot its data type

let userState;

console.log(accountEmail);

accountEmail="anand@gmail.com" // it changes the previous email value

console.log(accountEmail);

console.table([accountId, accountEmail, accountPass, userCity, userState])