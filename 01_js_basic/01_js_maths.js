/*The Math object is your ready-made calculator in JS. You don’t create it — just use its tools (Math.method()). */

console.log(Math)
console.log(Math.PI) //value of π (3.14159…)
console.log(Math.E) // Euler’s number (~2.718)
console.log(Math.sqrt(4)) //square root of given number
console.log(Math.random()) //gives random number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random()*10) //// random between 0 and 10
console.log(Math.round(4.69)) // rounds to nearest integer.
console.log(Math.ceil(2.1)) // rounds up.
console.log(Math.floor(2.9)) //rounds down.

/*+--------------+--------------------+---------------------------+-----------------------------+
| Category     | Method / Constant  | Description               | Example & Output            |
+--------------+--------------------+---------------------------+-----------------------------+
| Constants    | Math.PI            | Value of π                | Math.PI → 3.14159           |
|              | Math.E             | Euler’s number            | Math.E → 2.718              |
|              | Math.SQRT2         | Square root of 2          | 1.414                       |
|              | Math.SQRT1_2       | Square root of 1/2        | 0.707                       |
|              | Math.LN2           | Natural log of 2          | 0.693                       |
|              | Math.LN10          | Natural log of 10         | 2.302                       |
+--------------+--------------------+---------------------------+-----------------------------+
| Rounding     | Math.round(x)      | Round to nearest integer  | Math.round(4.6) → 5         |
|              | Math.ceil(x)       | Round UP                  | Math.ceil(4.1) → 5          |
|              | Math.floor(x)      | Round DOWN                | Math.floor(4.9) → 4         |
|              | Math.trunc(x)      | Remove decimals           | Math.trunc(4.9) → 4         |
+--------------+--------------------+---------------------------+-----------------------------+
| Random       | Math.random()      | Random (0–1)              | 0.1234…                     |
|              | Math.floor(...*10) | Random 0–9                | → 7 (example)               |
|              | Math.floor(...*6)+1| Dice (1–6)                | → 4 (example)               |
+--------------+--------------------+---------------------------+-----------------------------+
| Powers/Roots | Math.pow(a,b)      | a raised to b             | Math.pow(2,3) → 8           |
|              | Math.sqrt(x)       | Square root               | Math.sqrt(16) → 4           |
|              | Math.cbrt(x)       | Cube root                 | Math.cbrt(27) → 3           |
+--------------+--------------------+---------------------------+-----------------------------+
| Min & Max    | Math.max(a,b,…)    | Largest number            | Math.max(1,9,3) → 9         |
|              | Math.min(a,b,…)    | Smallest number           | Math.min(1,9,3) → 1         |
+--------------+--------------------+---------------------------+-----------------------------+
| Abs & Sign   | Math.abs(x)        | Always positive           | Math.abs(-7) → 7            |
|              | Math.sign(x)       | -1, 0, or 1               | Math.sign(-5) → -1          |
+--------------+--------------------+---------------------------+-----------------------------+
| Trigonometry | Math.sin(x)        | Sine (radians)            | Math.sin(π/2) → 1           |
|              | Math.cos(x)        | Cosine (radians)          | Math.cos(0) → 1             |
|              | Math.tan(x)        | Tangent (radians)         | Math.tan(0) → 0             |
|              | Math.asin(x)       | Inverse sine              | Math.asin(1) → 1.57 (π/2)   |
|              | Math.acos(x)       | Inverse cosine            | Math.acos(1) → 0            |
|              | Math.atan(x)       | Inverse tangent           | Math.atan(1) → 0.785 (π/4)  |
+--------------+--------------------+---------------------------+-----------------------------+
| Logs & Exp   | Math.log(x)        | Natural log (base e)      | Math.log(1) → 0             |
|              | Math.log10(x)      | Log base 10               | Math.log10(100) → 2         |
|              | Math.exp(x)        | e^x                       | Math.exp(1) → 2.718         |
+--------------+--------------------+---------------------------+-----------------------------+ */
