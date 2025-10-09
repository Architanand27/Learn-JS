// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHerro = ["Thor", "Ironman", "Spiderman"];

// console.log(myArr[0]);
// console.log(myHerro);

// array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9); // add element at the beginning
// myArr.shift(); // remove element from the beginning 


// console.log(myArr);




// console.log(myArr.includes(5));
// console.log(myArr.indexOf(5));

// console.log(myArr.reverse());


const newArr = myArr.join(); // convert array to string
// const newArr = myArr.toString(); // convert array to string
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

console.log("A", myArr);

const myNewArr = myArr.slice(1, 3); // does not modify the original array
console.log(myNewArr);

console.log("B", myArr);
const myNewArr2 = myArr.splice(1, 3); // modifies the original array
console.log(myNewArr2);

console.log("C", myArr);
