const name ="mayuri"
const count = 50

console.log(name + count +" value") //we try not to use this type of convention as it is not very readble and professional

console.log(`hello my name is ${name} and my score is ${count}`); //This is sting interpolation

/* 🔹 What is String Interpolation?
String interpolation means inserting variables or expressions inside a string.
Instead of breaking strings with + and "", JavaScript lets you do it neatly with template literals.


🔹 How Do We Write It?
We use backticks (`) instead of single ' or double " quotes,
and insert variables inside ${ }.


🔹 Why Use String Interpolation?
Cleaner than using + for concatenation.

Easier to read (especially with many variables).

Supports expressions, function calls, and multi-lines.*/


/*In JavaScript, there are two ways to declare a string:

1️⃣ String as a Primitive (normal way – recommended)*/

let str1 = "Hello World";
console.log(typeof str1); 

// 👉 "string"
//✅ This is lightweight, faster, and what we usually use.




//2️⃣ String as an Object (using new String())

let str2 = new String("Hello World");
console.log(typeof str2); 
// 👉 "object"

//Here, str2 is not a primitive string, it’s a String object (wrapper around the string).


//Special Note:


let str3 = "Mayuri";               // primitive
let str4 = new String("Mayuri");   // object

console.log(str1 == str2);   // true (values are same)
console.log(str1 === str2);  // false (types differ → string vs object)

//When you use new String("Hello"), JavaScript creates a String object, not just a plain text.
//Because it’s an object, you get some extra powers:

// 1)It is an object → so you can treat it like an array or dictionary (key–value pairs).

let strObj = new String("Hello");

console.log(strObj[0]);  // "H"
console.log(strObj[1]);  // "e"
//🔹 You can access letters by index (like arrays).



//2)You can store extra properties (since it’s an object).

strObj.language = "English";
console.log(strObj.language);  // "English"
//🔹 You cannot do this with primitive strings ("Hello".language will be ignored).

//3)All String methods work (length, toUpperCase, slice, etc. there are lot more methods).


console.log(strObj.length);        // 5
console.log(strObj.toUpperCase()); // "HELLO"
console.log(strObj.includes("He")); // true
console.log(strObj.charAt(2)) //l
console.log(strObj.indexOf(`H`)) //0
console.log(strObj.substring(0,2)) //He it will print value from index 0 to 1 as it include value from first index (0) to last index-1(2)

//trim() is a string method that removes the extra spaces from the start and end of a string.
//👉 It does not remove spaces in the middle.
//It does not change the original string (strings are immutable).
let user = "   Mayuri   ";
console.log(user.trim()); // "Mayuri"

//replace() is a string method that finds a piece of text inside a string and replaces it with something else.
let str = "I love tea";
let newStr = str.replace("tea", "coffee");

console.log(newStr); // "I love coffee"
//If you want to replace all matches, use: replaceAll()


//4)Behaves like an object → you can loop through keys.


for (let key in strObj) {
  console.log(key, strObj[key]);
}
// 0 H
// 1 e
// 2 l
// 3 l
// 4 o