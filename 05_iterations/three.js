/*🔄 for…of Loop in JavaScript
The for…of loop is used to loop over values of an iterable (like arrays, strings, maps, sets, etc).

It directly gives you the value at each step.
Cleaner and simpler than a normal for loop. 

---------------Syntax:
for (let variable of iterable) {
  // code using variable
}

iterable → something you can loop through (like array, string, map, set).
variable → gets each value one by one.*/

//--------------------Loop over an Array
let array =[1,2,3,4,5]
for(let num of array){
  console.log(`the value is ${num}`)
}

//--------------------Loop over a String
let name ="mayuri agrawal"
for(let char of name){
  console.log(char)
}

//------------------Loop over a Map##
/*##What is a Map in JS?
👉 A Map is a special type of collection in JavaScript that stores data in key-value pairs, just like objects…
BUT it’s more powerful and flexible.

Key points:
Keys can be any type (object, array, number, string, even function).
Keys are ordered (it remembers the order you insert them).
Has built-in methods to make working with data easier.*/
let myMap = new Map();

// adding values
myMap.set("name", "Alice");
myMap.set(100, "Number Key");
myMap.set(true, "Boolean Key");
myMap.set({ age: 25 }, "Object as Key");

// getting values
console.log(myMap.get("name"));   // Alice
console.log(myMap.get(100));      // Number Key
console.log(myMap.get(true));     // Boolean Key

// ------------------or

let m = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3]
]);
console.log(m)

/*+-----------------------+-----------------------------------------+------------------------------------------+
|       Feature         |                  Map                    |                  Object                   |
+-----------------------+-----------------------------------------+------------------------------------------+
| Key types             | Any type: string, number, object,       | Only string or symbol keys (numbers       |
|                       | function, etc.                         | automatically converted to string)        |
+-----------------------+-----------------------------------------+------------------------------------------+
| Key order             | Maintains insertion order               | Keys order not guaranteed (ES6 keeps      |
|                       |                                         | insertion order for strings & symbols)    |
+-----------------------+-----------------------------------------+------------------------------------------+
| Iteration             | Directly iterable with for...of         | Not iterable directly, need for...in or   |
|                       |                                         | Object.keys/values/entries                |
+-----------------------+-----------------------------------------+------------------------------------------+
| Performance           | Better for frequent additions/removals  | Good for small or static sets of props    |
+-----------------------+-----------------------------------------+------------------------------------------+
| Uniqueness of keys    | Keys must be unique (overwrite if dup)  | Keys must be unique (overwrite if dup)    |
+-----------------------+-----------------------------------------+------------------------------------------+
| Size                  | Has .size property                      | Need Object.keys(obj).length              |
+-----------------------+-----------------------------------------+------------------------------------------+
| Utility methods       | Rich API: set, get, has, delete, clear  | Very limited, manual helpers required     |
+-----------------------+-----------------------------------------+------------------------------------------+
| Serialization (JSON)  | Not directly JSON serializable          | Directly JSON serializable                |
+-----------------------+-----------------------------------------+------------------------------------------+ */

let name_map = new Map([[1,"mayuri"],[2,"rajveer"],[3,"puchku"],[4,"chipotle"]])
for(let value of name_map){
  console.log(value)//will print whole value
}
for (let [key,value] of name_map){ //for printing key and value seprately
  console.log(`key ${key}`)
  console.log(`value ${value}`)
}