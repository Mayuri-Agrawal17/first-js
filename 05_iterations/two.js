/*🔄 While Loop in JavaScript
A while loop runs a block of code as long as the condition is true.

First it checks the condition.
If condition is true → it executes the code.
Then again checks the condition → repeat until condition becomes false. */

let i = 1; // start
while (i <= 5) { // condition
  console.log(i);
  i++;
}

/*Can create infinite loop if condition never becomes false.
You can use break (to stop) and continue (to skip iteration).
Mostly used when you don’t know the exact number of iterations in advance. */

/*--------------------------------🔄 Do…While Loop in JavaScript
A do…while loop is just like a while loop, but the code inside it runs at least once, even if the condition is false.

do → run the block once.
while (condition) → check condition after running. */

let j = 10;
do {
  console.log(j);
  j++;
} while (j < 5);
// ⚡ Notice: The code ran once even though the condition was false from the beginning.