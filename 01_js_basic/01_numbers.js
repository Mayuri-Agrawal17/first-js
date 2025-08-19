const score = 100 
console.log(score) //100    
/*✅ It’s a primitive value (lightweight, stored directly in stack).
✅ Automatically gets access to Number methods (because JS temporarily wraps it).
✅ Commonly used in real projects. */


const balance = new Number(10000.23456)
console.log(balance) //[Number: 10000.23456]
/*❌ It’s an object, not a primitive.
❌ Stored in heap (slower, uses reference).
✅ Has the same methods (because it’s explicitly a Number object). */



console.log(balance.toString()) // "110000.23456" → converts number to string
console.log(balance.toLocaleString('en-IN'))
console.log(balance.toFixed(2)) // "10000.23" → fixes decimal places
console.log(balance.toPrecision(6))


/*JavaScript Number has some built-in properties that tell us the smallest and largest values it can handle.
🔹 1. Number.MAX_VALUE
The largest positive number JS can represent.
Anything bigger becomes Infinity.*/


console.log(Number.MAX_VALUE); 
// 1.7976931348623157e+308

console.log(Number.MAX_VALUE + 1); 
// 1.7976931348623157e+308  (no change, too big)

console.log(Number.MAX_VALUE * 2); 
// Infinity


/*🔹 2. Number.MIN_VALUE
The smallest positive number greater than 0 (not negative).
Anything smaller becomes 0.*/


console.log(Number.MIN_VALUE); 
// 5e-324

console.log(Number.MIN_VALUE / 2); 
// 0


/*🔹 3. Number.MAX_SAFE_INTEGER
The largest integer JS can safely represent (without rounding errors).

Beyond this, math may become inaccurate.*/


console.log(Number.MAX_SAFE_INTEGER); 
// 9007199254740991

console.log(Number.MAX_SAFE_INTEGER + 1); 
// 9007199254740992 (ok)
console.log(Number.MAX_SAFE_INTEGER + 2); 
// 9007199254740992 (oops! same, not safe)


/*🔹 4. Number.MIN_SAFE_INTEGER
The smallest safe integer (negative).*/


console.log(Number.MIN_SAFE_INTEGER); 
// -9007199254740991 