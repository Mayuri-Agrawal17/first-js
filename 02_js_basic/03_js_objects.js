/*An object is a collection of key–value pairs.
Keys are called properties (if value is data) or methods (if value is function).
Anything inside {} is an object */

let person = {
  name: "Rahul",
  age: 22,
  isStudent: true,
  greet: function() { console.log("Hello!"); }
};
// console.log(person)


// ways to create objects
// 🔹 1. Object Literal
//Directly written using {}.

const obj1 = {
    name:"mayuri" ,//key(name here) is taken as string(like "name") behind the scenes.//Only Symbol can be used as a truly unique non-string key.
    age:22,
    email:"mayuri@google.com",  
    location:"indore",
    isLoggedIn : true,
    "is Happy" : "yes"
}

//different ways to access elemrnt of object
// 1. "." method
console.log(obj1.email) //but not recomended bcs if we decade manulally key as string in that case we have no way to access that 
// with this method of accessing object bcs (obj."is Happy")is not a correct.
// Use dot notation for simple keys (name, age, email).


// 2.[] notation
// Use bracket notation when key has spaces, special characters, starts with numbers, or comes from a variable.
console.log(obj1["email"]) //here we write key in [] with " " it works both with simple key and special keys
console.log(obj1["is Happy"])

// Special case to why [] notation is important
// 🔹 Special Case: Symbol
// If you want a non-string key, you can use Symbol:

let sym = Symbol("id");
let obj = {
  [sym]: "secret",//we cannot wriet sym as normal key if we do that then it will not r=treat as symbol
  name: "Rahul"
};

console.log(obj[sym]); // "secret" that the only way to access symbol type of key in js
console.log(Object.keys(obj)); // ["name"] → Symbol key is not a string

//Methods og object

// 1. to change valeu of any key ----- obj_name.key_name = updated value ----
obj1.email="mayuri@chatgpt.com"
console.log(obj1)

//2.freeze() once you freeze any object it Makes object the whole immutable (cannot change values). ---Object.freeze(obj-name) ----
Object.freeze(obj1)
obj1.email="mayuri@hajsn.com" //it will not give nay erroe but the value will not chnage furthur
console.log(obj1) //can check here




// Function as elemnt in object
let human = {
  name: "Aman",
  age: 22,
  greet: function () {      //we can also declare methos likw ---- greet() {console.log("xyz")} ---- no need to wriet function()
    console.log("Hello, js user");
  }// function as element (method)
};
// Here greet is a function inside the object. Since it's inside an object, we call it a method.
human.greet(); // "Hello, js user

//using this 
human.greettwo= function() { console.log(`hello may name is ${this.name}`)} //adding function inalready exixtiong object
// here we have use this , this reffer to the current object .Here this refers to human, because human is the one calling greettwo().
human.greettwo()