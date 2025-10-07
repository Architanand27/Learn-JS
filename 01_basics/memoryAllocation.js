// Stack(Primitive), Heap (Non Premitive)

// Stack.....
let myNameis= "Archit"

let myAnotherNameis=myNameis

myAnotherNameis= "Aditya"

console.log(myNameis)
console.log(myAnotherNameis)


// Heap......

let studentOne={
    name:"Archit",
    roll:2005
}


let studentTwo=studentOne

studentTwo.name="Aditya"

console.log(studentOne.name)
console.log(studentTwo.name)

