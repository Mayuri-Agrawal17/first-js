/*hat is Stack Memory in JavaScript?
Think of the stack like a pile of plates in a cafeteria:

You can only put a new plate on top or remove the top plate — Last In, First Out (LIFO).

It's fast, organized, and works in a fixed order.

In JavaScript:

Stack stores primitive values (like numbers, strings, booleans, null, undefined, symbol, bigint).

Each value is stored directly (not by reference).

When you assign a primitive to another variable, a copy of the value is made — changing one won't affect the other.

📌 Example — Stack behavior with primitive values:*/


let a = 10;
let b = a; // Copy of value
b = 20;

console.log(a); // 10 (unchanged)
console.log(b); // 20
/*Here, a and b have separate boxes in stack memory.

2️⃣ What is Heap Memory in JavaScript?
Think of the heap like a big messy storage room:

You can store big, complex stuff.

Items are stored anywhere in the room, but you get a label (reference) to find it.

It's slower than stack but can hold more flexible and complex data.

In JavaScript:

Heap stores non-primitive values (objects, arrays, functions).

Variables don’t hold the value directly; they hold a reference (pointer) to the value’s location in heap.

If two variables have the same reference, changing one will change the other.

📌 Example — Heap behavior with reference types:*/


let obj1 = { name: "Mayuri" };
let obj2 = obj1; // Reference to the same object
obj2.name = "Puchku";

console.log(obj1.name); // "Puchku" (changed)
console.log(obj2.name); // "Puchku"
/*ere, obj1 and obj2 point to the same box in heap memory.

3️⃣ Key Differences — Stack vs Heap
Feature-Stack Memory-Heap Memory
Stores-Primitive values-Non-primitive values
Access-Speed-Very fast-Slower
Size-Small & fixed-Large & dynamic
Stored Value-Actual value-Reference (pointer)
Copy Behavior-Creates a new copy-Shares reference (changes reflect)*/