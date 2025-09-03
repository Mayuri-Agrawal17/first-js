/*reduce()
reduce() is an array method in JavaScript.
It reduces the entire array into a single value (like a sum, product, object, or even another array).
It goes through the array element by element, keeping track of a value called the accumulator.

Think of it like a snowball rolling down a hill, collecting stuff as it moves.
🎿 The snowball = accumulator. 


---------Syntax
array.reduce(function(accumulator, currentValue, index, array) {
  return newAccumulatorValue;
}, initialValue);


accumulator->	The value carried from the previous step.
currentValue ->The current element in the array being processed.
index (optional) ->	Current index of the element.
array (optional) ->	The entire array.
initialValue (optional but recommended)->	The starting value for the accumulator.*/


//reduce with simple function (not arrow function)
const nums = [1,2,3,4]

const myTotal= nums.reduce(function(arr,crr){
    console.log(`arr ${arr} crr ${crr}`)
    return arr + crr
} , 0 )
console.log(myTotal)

/*How it works (step-by-step)

Array = [1, 2, 3, 4]
initialValue = 0

Step	acc (previous total)	curr (current number)	Return value
1	    0	                     1	                     1
2	    1	                     2	                     3
3	    3	                     3	                     6
4	    6	                     4	                     10

Final result = 10 */


//same with arrow function
const myTotals= nums.reduce((arr,crr)=>arr+crr ,0 )
console.log(myTotals)

//object
const cart = [
  { item: "Laptop", price: 50000 },
  { item: "Headphones", price: 2000 },
  { item: "Mouse", price: 1000 }
];

const total = cart.reduce((acc, product) => acc + product.price, 0);

console.log(total); // 53000