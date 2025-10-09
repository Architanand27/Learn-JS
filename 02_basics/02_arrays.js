const marvelHeroes = ["thor", "ironman", "spiderman", "hulk"];
const dcHeroes = ["superman", "batman", "flash", "aquaman"];

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);
// console.log(marvelHeroes[4][1]);

// const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);

const allNewHeroes = [...marvelHeroes, ...dcHeroes];
// console.log(allNewHeroes);

const anotherArr = [1, 2, 3, [4, 5], 6, [7, [8, 9]]];

const realAnotherArr = anotherArr.flat(Infinity);
// console.log(realAnotherArr);



console.log(Array.isArray("Archit"));

console.log(Array.isArray(marvelHeroes));
const myNameArr=Array.from("Archit");
console.log(Array.isArray(myNameArr));
console.log(Array.from({name: "Archit"})); // this intresting topic this is not converted to array


let count = 1;
let count2 = 2;
let count3 = 3;

console.log(Array.of(count, count2, count3));