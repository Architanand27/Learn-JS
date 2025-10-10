// 


//  object literal

const mySymbol = Symbol("key1");

const myDeatils = {
    name: "Archit",
    "full name": "Archit Anand",
    [mySymbol]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "archit@google.com"
}

// console.log(myDeatils.name);

// console.log(myDeatils["name"]); // this is ideal way to access the property of an object
// because the key is always a string

// console.log(myDeatils["full name"]); // this is the only way to access the property of an object

// console.log(myDeatils[mySymbol]); // this is the only way to access the property of an object


myDeatils.age = 19; // update the property of an object
// console.log(myDeatils.age);

// Object.freeze(myDeatils); // freeze the object
myDeatils.age = 20; // this will not work because the object is frozen
// console.log(myDeatils);

// adding function in an object
myDeatils.greeting = function() {
    console.log("Hay Buddy");
}
myDeatils.greetingTwo = function() {
    console.log(`Hay ,${this["full name"]}`); // this keyword refers to the current object
}

console.log(myDeatils.greeting()); // undefined because the object is frozen
console.log(myDeatils.greetingTwo());

