// Immediately Invoked Function Expression (IIFE)

function chai() {
  console.log("Chai!");
}
chai(); // Normal function call

// IIFE
(function() {
  console.log("IIFE Chai!");
})();

// IIFE with named function
(function namedChai() {
  console.log("Named IIFE Chai!");
})();

// IIFE with arrow function
(() => {
  console.log("IIFE Arrow Chai!");
})();

// IIFE with parameters
(function(name) {
  console.log(`Hello, ${name}!`);
})("Archit");

// IIFE with arrow function and parameters
((name) => {
  console.log(`Hello from Arrow IIFE, ${name}!`);
})("Archit");