/*🌊 Control Flow in JavaScript
📌 Definition
Control flow means the order in which JavaScript executes your code.

Normally, JavaScript runs line by line from top to bottom.
But with control flow statements (like if, for, while, switch…), we can change this order depending on conditions, loops, or choices.*/


//------------- 1. Sequential Flow (Default)
// JS runs code line by line.

console.log("Step 1");
console.log("Step 2");
console.log("Step 3");


// 👉 Output will always be in sequence:
// Step 1
// Step 2
// Step 3


//---------------2.Conditional Statements (Decision Making)
// Used when we want the program to make choices.
/*.

🟢 if...else in JavaScript
📌 Definition
if is used to check a condition.
If condition is true, code inside if runs.
If condition is false, code inside else runs (if else exists). */

//🔹 Basic if
let age = 20;

if (age >= 18) {
  console.log("You are an adult."); //👉 Since 15 >= 18 is false, it prints:You are an adult.
}

//🔹 if...else
let age2 = 15;

if (age2 >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor."); //👉 Since 15 >= 18 is false, it prints:You are a minor.
}

//🔹 if...else if...else (multiple checks)
let marks = 70;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B"); //👉 Since marks = 70, second condition is true, so output:Grade B

} else {
  console.log("Grade C");
}

