/*🧺 2. Non-Primitive (Reference) Data Types
These are complex types, used to store multiple values or structures. They are copied by reference, not by value.
 Reference Types: Change Original Value
They are copied by reference, which means:

If you change one, the other also changes — because they point to the same memory.

📦 a) Object
➡️ A collection of key–value pairs, like a real-world object.
Anything inside {} is an object*/


let person = { name: "Mayuri", age: 21 };
// 📌 Keys are strings (by default), values can be anything.


console.log("--------------------------")


/*📋 b) Array
➡️ A list of values, stored in a single variable, inside square brackets.*/


let colors = ["red", "green", "blue"];
// 📌 Arrays are a special type of object (with number-like keys).

typeof colors; // "object"


console.log("---------------------")


/*🔧 c) Function
➡️ A block of code that performs a task when called.*/


function greet() {
  console.log("Hello");
}

// 📌 Functions are also objects in JS.

// ❗ Special Note: All reference types are objects underneath:
// Arrays, Functions, Dates, RegExps, Maps, Sets — all are object type.

