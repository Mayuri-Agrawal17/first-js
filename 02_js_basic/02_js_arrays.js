let dish=["dal batti", "rajma chawal" , "paneer burji", "idli sambhar" , "dosa chattni"]
let sweets=["rasmallai", "rasgulla" , "pastry" , "kajju katli" , "barfi"]

console.log(dish)

dish.push(sweets)
console.log(dish) // no proper concatination instead it will inseert the whole sweet array as a single element
// (as single array can have multiple data type as elements) of dish array 
/*[
  'dal batti',
  'rajma chawal',
  'paneer burji',
  'idli sambhar',
  'dosa chattni',
  [ 'rasmallai', 'rasgulla', 'pastry', 'kajju katli', 'barfi' ]
]*/

console.log(dish.push(sweets))//this will return 7 as we have alreday pushed sweets in dish in line 6 and here we are doitng it again 
//and when we console this it will return length



//How to properly concatinate / combine elements of 2 string

// 1. concate method
let newArray= dish.concat(sweets)//Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(newArray)



//  2.The spread operator is written as ... and it expands (spreads) elements of an array, object, or string into individual items.
// Think of it as unpacking a box 📦 and laying everything out on the table.

// 🔹 Use Cases of Spread


// 1. Merging Arrays
let veg = ["potato", "tomato"];
let fruit = ["apple", "mango"];

let mix = [...veg, ...fruit];
console.log(mix); 
// ["potato", "tomato", "apple", "mango"]


// 2. Copying Arrays
let fruits = ["apple", "banana", "mango"];
let copyFruits = [...fruits];  

console.log(copyFruits); 
// ["apple", "banana", "mango"]


//3. Adding New Elements Easily
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5];

console.log(newNumbers);
// [1, 2, 3, 4, 5] 


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


/*The flat() method is used with arrays.
It flattens a nested (inside another) array into a single array.

👉 Think of it like taking out items from inside small boxes 📦 inside a big box and keeping them all in one line. */

let arr = [1, 2, [3, 4],[6, 9, 7 ]];

console.log(arr.flat()); 
// [1, 2, 3, 4 ,6 ,9 ,7]

// 🔹 Example 3: Flatten Multiple Levels

// We can give a depth number.
let arr1 = [1, [2, [3, [4]]]];

console.log(arr1.flat(2)); 
// [1, 2, 3, [4]]

console.log(arr1.flat(Infinity)); 
// [1, 2, 3, 4]  (fully flat no matter how deep)


// 🔹 Example 4: Empty Slots (Holes) in Array
let arr3 = [1, 2, , 4];  // notice missing element
console.log(arr3.flat()); //👉 flat() removes empty holes automatically.
// [1, 2, 4]


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// more methods

//1. isArray
console.log(Array.isArray("mayuri")) // isarray is a array method which checks if the type of given value is array or not 
// false

//2.from
console.log(Array.from("mayuri")) // it converts the given value into array formate but only when the given value is possible to
// convert otherwise return  empty array []
//[ 'm', 'a', 'y', 'u', 'r', 'i' ]


//3. of
/*Array.of() creates a new array from the arguments you pass to it.
No matter how many values or what types of values you give, it puts them into an array. */
let arr4 = Array.of(10, "hello", true, null);
console.log(arr4);// [10, "hello", true, null]

// intresting case
let arr5 = Array(5);     
console.log(arr5); // [empty × 5] → makes an empty array with length 5

let arr6 = Array.of(5);  
console.log(arr6);// [5] → makes an array with the value 5