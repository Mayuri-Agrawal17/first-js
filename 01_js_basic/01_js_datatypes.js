"use strict" //treat all js code as newwr version

// alert(3*3)//it will not work here as we are using nodejs not browser


//🔢 1. Number
//➡️ Stores any number (like 10, -5, 3.14).

let age = 25;


// 2. String
// Stores text in quotes ("hello", 'world').

let name = "Mayuri";


// 3. Boolean
//Only true or false, used for yes/no, on/off situations.

let isStudent = true;


// 4. Array (Object type)
// Stores a list of values inside square brackets.

let fruits = ["apple", "banana", "mango"];


//5. Object
//Stores data in key–value pairs (like a real-world item).

let user = { name: "Mayuri", age: 21 };


// 6. Undefined
// Means the variable is declared but not given any value.

let x;
console.log(x); // undefined


//7. Null
// Means nothing — value is empty on purpose.
//Because null is a special value that represents “nothing” or “empty” on purpose — and it’s not part of any object, array, or other type.

// It stands on its own, with a clear meaning:
// 🗣️ “There should be a value here, but right now it’s empty — by choice.”

let data = null;


// 🧠 Difference Between undefined and null:
// undefined=>	Variable exists but has no value yet	JavaScript sets it
// null	  =>   You set it to say “nothing here”	        You set it manually

// 8. Symbol
// A unique, hidden value (used rarely, for advanced use).

//9. BigInt
//used for very big numbers beyond normal number limit.

let big = 123456789012345678901234567890n;