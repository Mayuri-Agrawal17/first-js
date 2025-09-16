// Object Literal (Simplest Way)
// When you create an object directly using {}.

const car = {
  brand: "Toyota",            // Property
  model: "Corolla",
  start: function() {         // Method
    console.log("Car started");
  }
};

car.start(); // Output: Car started

//this keyword
/*In JavaScript, the this keyword is a special variable that refers to the current execution context, or more simply,
the object that "owns" the currently executing code.

In a regular function (not part of an object): In non-strict mode, this refers to the global object
(e.g., window in browsers, global in Node.js). In strict mode, this will be undefined.

*/
const car1 = {
  brand: "Toyota",            // Property
  model: "Corolla",
  start: function() {         // Method
    console.log(`brand:${this.brand}`);  //if we do not write JS looks for a normal variable called brand in the current scope.
                                         //There is no standalone variable named brand → error: brand is not defined.
//Inside a method, this refers to the object that called the method → here it's car1.So this.brand means "brand property of car1".
  }
};
car1.start()

/* ****************************************************************************************************************************** */

/*Constructor Function 

Used with the new keyword.

JS automatically:
Creates an empty object {}.
Sets this to point to that object.
Returns the object. */

function user(username,loginCount,isLoggedIn){
  this.username=username     //here this.username is a new vaeiable we can give it a new name also but professionally we use same name
  this.loginCount=loginCount //this tells that store in current execution context 
  this.isLoggedIn=isLoggedIn 
}

/*'new' keyword is important:
 1. Creates a brand-new empty object {}
 2. Sets 'this' to point to that new object
 3. Runs the constructor function body
 4. Returns the new object automatically
 
 Without new, no new object is created at all.
The properties (username, etc.) get attached to the global object (window in browsers, global in Node.js).*/
const userOne= new user("hitesh",12,true)  
console.log(userOne)