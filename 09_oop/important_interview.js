/*their is interview question 
can we change the value of pi which is availabe in math if not then Why Math.PI Cannot Be Changed

if we try to do this-
Math.PI = 5;
console.log(Math.PI); // 3.141592653589793 (It doesn’t change!)


Math.PI cannot be overwritten because its property descriptor is locked:

writable: false
configurable: false
enumerable: false 

Meaning:

❌ writable: false → The value cannot be changed.
❌ configurable: false → The property cannot be deleted or redefined.
❌ enumerable: false → It will not show up in loops like for...in.


Checking the Property Descriptor using ""getOwnPropertyDescriptor""*/

console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

// Output:

// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

//->>Creating Your Own Locked Properties
//You can define custom properties with the same rules using ""defineProperty"":

let tea = {};

Object.defineProperty(tea, "price", {
  value: 250,
  writable: false,      // ❌ Cannot change this value
  enumerable: true,     // ✅ Will show up in loops
  configurable: false   // ❌ Cannot delete or modify
});

console.log(tea.price); // 250

tea.price = 300;        // Trying to overwrite
console.log(tea.price); // 250 (It didn’t change!)