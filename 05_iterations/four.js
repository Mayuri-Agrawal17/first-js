/*for…of works on iterables (Array, String, Map, Set, etc).
❌ Doesn’t work directly on normal objects (because objects are not iterable by default). */

//-------how to iterate on object 
const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'

}
 
//for in loop
/*for…in loops over the property names (keys) of an object.
It gives you keys as strings, not values.

Order of keys
Don’t rely on the order. Engines try to be consistent, but the spec doesn’t promise an order for for…in.
(If you need a stable order, use Object.keys(obj).sort() etc.)*/

for (const key in myObject) {
    console.log(key) //to print keys
    console.log(myObject[key]) //to print values
}

//----for in loop on array
const arr = ["a","b","c","d","e"]
for (const key in arr) {
    console.log(key) //it will print keys of array i.e. index of array (not recommended to use with array)
    console.log(arr[key]) //print values
}