/*✅ 1. Primitive Data Types
Primitive types are the basic building blocks. They store single, fixed values, and are copied by value (not by reference).




There are 7 primitive types in JavaScript:

🔢 a) Number
➡️ Represents any numeric value — integers or decimals.*/

let age = 25;

/*📌 Note:
JavaScript only has one number type — no int or float.
Special numbers: Infinity, -Infinity, NaN (Not a Number)*/

console.log(10 / 0);        // Infinity
console.log("abc" - 2);     // NaN

console.log("------------------------------------------")

/*📝 b) String
➡️ Represents text — written in single ' or double " or backtick ` quotes.*/

let name = "Mayuri";

// 📌 Tip: Use template literals (`Hello ${name}`) for embedding variables.


console.log("------------------------------------------")


/*✅ c) Boolean
➡️ Only two values: true or false — used for decisions.*/

let isStudent = true;
// 📌 Tip: Used in conditions like if, while, etc.


console.log("------------------------------------------")


/*🛑 d) Undefined
➡️ Means a variable is declared but not given any value yet.*/


let x;
console.log(x); // undefined

// 📌 JavaScript assigns this automatically if you don’t assign anything.


console.log("------------------------------------------")


/*🚫 e) Null
➡️ Means empty on purpose. You manually say: "there’s nothing here."*/


let data = null;
/*📌 Confusing part:
typeof null returns "object" → this is a bug in JS from 1995, still exists.
null != undefined in ===, but null == undefined is true.*/


console.log("------------------------------------------")


/*🧙‍♂️ f) Symbol (Advanced)
➡️ A special, unique, hidden value — used to make object keys truly unique.*/


let id = Symbol("userID");
// 📌 Symbols are mostly used in advanced topics or libraries — you can skip early on.


console.log("------------------------------------------")


/*💯 g) BigInt (New!)
➡️ Used to represent very large numbers beyond normal number limits.*/


let big = 123456789012345678901234567890n;

// 📌 Note:BigInts have n at the end.
// You can’t mix BigInts and normal numbers (big + 10 ❌).

