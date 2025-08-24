//-------------Execution context----------------
 /*
 🌍 What is Execution Context?

Execution Context is like the environment in which your JavaScript code runs.
Think of it as a box where all variables, functions, and the current "this" keyword live while your program is running.


🏗----------------- Types of Execution Context-----------------------

-----------Global Execution Context (GEC)-------------
This is created by default when your file runs.
All code that is not inside a function lives here.
In the browser: this → window object
In Node.js: this → {} (empty object, not window)


----------Function Execution Context (FEC)------------
Created whenever a function is called.
Each function has its own box (context).
Has its own variables, arguments, and scope chain.


----------Eval Execution Context (very rare)--------
Created when you use eval() (not recommended, mostly ignored).




---------------🛠 How Execution Context Works--------------

Every execution context has two phases:

****Creation Phase (Memory Allocation Phase)****
JavaScript scans the code before actually running it.
It allocates memory for variables and functions:
Variables → undefined initially
Functions → Whole function is stored
this is set

****Execution Phase*****
JavaScript runs the code line by line.
Values are assigned to variables.
Functions are executed when called. */

// 📌 Example Code

var n = 2;

function square(num) {
  return num * num;
}
var result1 = square(n);
var result2 = square(4);

/*------Step 1: Global Execution Context Created

-------Creation Phase--------
n → undefined
square → function object (whole function stored)
result1 → undefined
result2 → undefined
this → window (browser)

----------Execution Phase----------
n = 2
square already defined (nothing new)
result1 = square(n) → function called!


-----------Step 2: New Function Execution Context (for square(n))

-------Creation Phase------
num → undefined
this → window

--------Execution Phase-----
num = 2 (argument passed)
return 2 * 2 → 4

Function finishes → value 4 returned → stored in result1.
FEC popped from stack.



-------Step 3: New Function Execution Context (for square(4))

-----Creation Phase-----
num → undefined

------Execution Phase-----
num = 4

return 4 * 4 → 16
Function finishes → value 16 returned → stored in result2.
FEC popped from stack.


---------Step 4: End

Global context ends after finishing code.
Call stack is empty.

Final results:
result1 = 4 
result2 = 16*/

/*✅ So in very simple words:

JS first prepares memory (Creation Phase)
Then runs code line by line (Execution Phase)
Functions create their own box (FEC) and when done, go away. */



/*🧠 Call Stack (Execution Stack)

Call Stack is like a pile of plates 🍽️
When code starts → GEC is pushed on stack
When a function is called → FEC is created and pushed on stack
When function finishes → FEC is popped off
At the end, only GEC remains, and when it’s done → program ends. */