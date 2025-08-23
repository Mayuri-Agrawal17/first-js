// Immediatelly invoked function expression (IIFE)
// It is a function in JavaScript that is declared and executed immediately (as soon as it is defined).

// 🔹 Why use IIFE?
// Avoid polluting global scope (keep variables private).
// Run code immediately without needing to call it later.

//1.Normal function IIFE
(function person(){  //named IIFE as have given it a name (person here). we can make it without name also only with plain ().
    console.log("Normal IIFE function")
})();

// here we wtite the fun inside (), When we wrap the function inside parentheses (), JavaScript no longer treats it as a declaration.
// Instead, it treats it as a function expression (an anonymous function stored in memory).
// Reason: Parentheses () force JS to evaluate it as a value, not as a standalone function.

// The second () at the end is what calls/invokes the function immediately.

// Adding ; at the end is a good practice. 
// Because if another piece of code is above it without a semicolon, JavaScript might confuse and throw an error.


//2. With parameters
(function (name){
    console.log(`hey, ${name} this is paramenter IIFE function`)
})("Mayuri");


// 3.Arrow function IIFE
(()=>console.log(`this is arrow function`))();