function sayMyName() {
    console.log("A");
    console.log("R");
    console.log("C");
    console.log("H");
    console.log("I");
    console.log("T");

}

// sayMyName();'

// function add(num1, num2) {
//     console.log(num1 + num2);
    
// }
// add(2, 3);


function add(num1, num2) {
    // let sum = num1 + num2;
    // return sum;
    return num1 + num2;
       
}

const result = add(2, 3);

// console.log("Result: ",result);

function loginUserMessage(username = 'Guest ') { // default parameter: if no argument is passed, it will take 'Guest' as default
    if (username === undefined) {
        console.log("Please enter a username");
        return; // this will return undefined
    }
    return `${username} just logged in.`;
}

// console.log(loginUserMessage("Archit"));
// console.log(loginUserMessage()); // username is undefined


function calculateCartPrice(...prices) { // rest operator
    // console.log(prices);
    // let total = 0;
    // for (let price of prices) {
    //     total += price;
    // }
    // return total;

    return prices;

}

// console.log(calculateCartPrice(20, 30, 40, 50, 60)); // [20, 30, 40, 50, 60]


const user = {
    username: "Electro",
    price: 20000
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
// handleObject({
//     username: "Bob",
//     price: 10000
// })

const myNewArray = [20, 30, 40, 50, 60];

function returnSecondElement(arr) {
    return arr[1];
}

console.log(returnSecondElement(myNewArray)); // 30
console.log(returnSecondElement([100, 200, 300])); // 200




