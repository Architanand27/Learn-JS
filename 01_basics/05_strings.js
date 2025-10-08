// const name="Archit";
// const repocount=7;

// console.log('Hello my name is ${name} and my Repo Count is ${repocount}');

const name = "Archit";
const repocount = 7;

console.log(`Hello my name is ${name} and my Repo Count is ${repocount}`);


const gameName = new String('archit-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   archit    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://archit.com/archit%20anand"

console.log(url.replace('%20', '-'))
console.log(url);


console.log(url.includes('sundar'))

console.log(gameName.split('-'));