// var a=20;
// if(true){
//     var a=30;
// }
// console.log(a); // 30 because var is function scoped and not block scoped

{}// this is a block scope 

function one(){
    const username = "Archit"; // function scope
    function two(){
        const website = "youtube.com";
        console.log(username); // can access parent scope
    }
    // console.log(website); // error: website is not defined
    two();
}
// one();

if(true){
    const username = "Archit";
    if(username === "Archit"){
        const website = "youtube.com";
        // console.log(username); // can access parent scope
    }
}





