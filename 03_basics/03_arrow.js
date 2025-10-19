 const user = {
    username: 'Archit',
    price: 9999,

    welcomeMessage: function() {
        console.log(`Welcome ${this.username}, the price is ${this.price}`);
        console.log(this);
    }
 }

//  user.welcomeMessage();
//  user.username = 'NewArchit';
//  user.welcomeMessage();
// console.log(this); // refers to global object (window in browsers)

function demo(){
    let username = 'Archit';
    console.log(this.username); // undefined because 'this' here refers to global object which doesn't have 'username' property
}
// demo();

// ++++++++++++++++++ Arrow Functions ++++++++++++++++++

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
const addTwo = (num1, num2) => (num1 + num2); // implicit return

console.log(addTwo(5, 10));

