let score="27"


// console.log(typeof score);
// console.log(typeof(score)); //both are use to checks data types of variable

let  valueInNumber= Number(score) // it convert anoter data types into number

// In conversion
// "27" => 27
// "27asdf" => NaN (not a number)
// true => 1; false => 0;
// null => 0
// undefined => NaN
// console.log(typeof valueInNumber)



// lets check how number convert into a boolean


let isLoggedIn =9 // If we enter any string or num it shows true but if we enter either 0 or keeps empty variable it convert into false


let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn);


// *********************Operations***************

let value = 3
let negValue = - value 
// console.log(negValue)

let str1 = "hello"
let str2 = "Archit"

let str3 = str1 + str2
// console.log(str3)


// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")

// console.log(+true)

let gameCounter = 100
gameCounter++

console.log(gameCounter)