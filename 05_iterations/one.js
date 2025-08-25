//-------------for loop in js

/*A for loop is used when you want to run a block of code again and again (repeat it) until a certain condition becomes false.

It’s like saying:
Start → Check Condition → Run Code → Update → Repeat */

for(let index=0;index<=10;index++){
    console.log(index)
}

/*How it works:
Start with index = 0.
Check index <= 10 → true. Run console.log(index).
Increase index (index++).
Repeat until index <= 10 is false. */

//🟢 Nested For Loop (Loop inside loop)
// Used for patterns, tables, grids, etc.

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}

//break in for loop
//👉 break is used to stop the loop completely when a condition is met.
//Example: Stop loop when number is 3

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; // stop the loop
  }
  console.log(i);
}

//continue in for loop
//👉 continue is used to skip one loop cycle and move to the next iteration.
//Example: Skip number 3

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // skip this loop cycle
  }
  console.log(i);
}