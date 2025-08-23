// -----------------------This Keyword in js-----------------------
/*👉 this is a special keyword in JavaScript that refers to the object that is currently executing the function.
Its value changes depending on how the function is called.
Think of it like: "this = who called me?" */


// 1️⃣ this in Global Scope

// In browsers, the global object is window.
// So, in global scope:
console.log(this);  //here it will be {}.👉 {} (empty object in Node.js)
// 👉 window (in browser) --when we inspect in browser amd write this their tahn it will give this


// 2️⃣ this in Object Method
// If a function is called as a method of an object → this refers to that object.

const person = {
  name: "Ravi",
  greet: function () {
    console.log("Hello, I am " + this.name);
  }
};

person.greet();  // 👉 "Hello, I am Ravi"
person.name="mayuri"
person.greet(); // Hello, I am mayuri


// 3️⃣this in Normal Function

// By default:
// In non-strict mode → this = global object (window in browser).
// In strict mode → this = undefined.

//That’s because when a function is just called normally (not as a method of an object), JavaScript doesn’t know what object 
// should own it, so:
// Default = global object.
// Strict mode = safer → gives undefined.


// Example 1: NON strict
function show() {
  console.log(this);
}

show();  
// 👉 Output (in browser):
// Window { ... }   // the global object

// 👉 Output (in Node.js):
// Object [global] { ... }


// Example 2: Strict mode

"use strict";  

function showName() {
  console.log(this);
}

showName();//undefined (it is possible that here it will not print undefined but in brower it will give you undefined only)
/*Because Node wraps your file inside a module function, the behavior of this is slightly different.
So sometimes you’ll see this as module.exports or global instead of undefined, even in "use strict" mode. */


// Example 3: Function inside an object
const obj = {
  value: 10,
  show1: function () {
    function inner() {
      console.log(this);
    }
    inner();
  }
};

obj.show1();
// 👉 Output (non-strict mode):
// Window { ... }  // or global object

// 👉 Output (strict mode):
// undefined

// ⚠️ Notice: Even though inner() is inside an object, it’s just a normal function call, so this doesn’t point to obj.




// ------------------------Arrow Function---------------------------

// An arrow function is a shorter way to write a function in JavaScript using =>.
// 👉 Syntax:--------------------const functionName = (parameters) => { code }

const add = (a,b)=>{
    return a+b
}
console.log(add(3,5))

//or 

// implicit return 

const sub=(a,b)=>a-b  //no return it assumes that we are returnings and no need of{} as only one line ie their  
console.log(sub(5,2))

// or 

// use () with return statement

const multi =(a,b)=>(a*b) //this is useful when we want to return object bcs object cannot be returned without().ex--({user:"mayuri"})
console.log(multi(5,6)) 

//No this of its own
// Arrow function does not create its own this.
// It takes this from the place (lexical scope) where it is written.

const person1 = {
  name: "Puchku",
  normal: function () {
    console.log(this.name); // ✅ 'this' = person1 object
  },
  arrow: () => {
    console.log(this.name); // ❌ 'this' = global / undefined
  }
};

person1.normal(); // Puchku
person1.arrow();  // undefined

// 👉 Arrow functions are not good for methods inside objects.