// const tinderuser = new Object();

const tinderuser = {};

tinderuser.id="123abc";
tinderuser.name="Archit";
tinderuser.isLoggedIn = false;

// console.log(tinderuser);

const regularUser = {
    email: "aditya@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aditya",
            lastname: "Kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const obj3 = {...obj1, ...obj2}; // spread operator
const obj4 = Object.assign({}, obj1, obj2); // Object.assign() method
// console.log(obj3);
// console.log(obj4);

const users = [
    {
        userid: "123",
        fullname: "Archit Anand",
        email: "archit@123"
    },
    {
        userid: "124",
        fullname: "Aditya Kumar",
        email: "aditya@123"
    }
    
]

console.log(tinderuser);

console.log(Object.keys(tinderuser)); // get all the keys of an object
console.log(Object.values(tinderuser)); // get all the values of an object
console.log(Object.entries(tinderuser)); // get all the entries of an object

console.log(tinderuser.hasOwnProperty("name")); // check if the object has a property or not
console.log(tinderuser.hasOwnProperty("age")); // check if the object has a property or not

