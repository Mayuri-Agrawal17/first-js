/*
The this Keyword Problem
Default Behavior of this:

this refers to current execution context.
In browser, at global level → this = window.
In Node.js, at global level → this = {} (empty object).

Problem Scenario: Nested Functions*/

function outerFunction() {
  console.log(this); // outer function's `this`

  function innerFunction() {
    console.log(this); // inner function's `this`
  }

  innerFunction();
}

outerFunction();

// Output:
{}   // Node.js global object
{}   // inner function -> also points to empty object or window in browser

// Why Problem Occurs:
// this changes based on where the function is called, not where it is defined.
// The inner function loses access to the this of the outer function. 


//The .call() Solution
// .call() allows you to explicitly set the value of this for a function.

//Scenario:

// We want to create a new user.
// There’s a helper method setUsername that sets the username for the user object.

function setUsername(username) {
  this.username = username; // sets username to the current `this`
}

function createUser(username, email, password) {
  // Calling helper method
  setUsername(username); 

  this.email = email;
  this.password = password;
}

const user1 = new createUser("chai", "chai@code.com", "123");
console.log(user1);

// Output:
// createUser { email: 'chai@code.com', password: '123' }


// 🔹 Issue:
// username was not set because inside setUsername(),
// this does NOT refer to createUser’s object — it defaults to the global object.

function setUserName(username){
    this.username=username
    console.log("called")
}

function user(username,email,password){
    /*When we do setUsername.call(this, username),
    it explicitly passes the current this of createUser to setUsername.
    Now, setUsername correctly sets username inside the same object being created. */
    setUserName.call(this,username)
    this.email=email
    this.password=password
}

const chai= new user("mayuri","mayuri@xyz",123)
console.log(chai)

/*The syntax of .call() is super simple:

Syntax:
functionName.call(thisArg, arg1, arg2, arg3, ...);

Explanation:
Part	                What It Means (Simple Words)
functionName	        The function you want to run.
.call	                A special method that runs the function immediately but lets you choose what this should point to.
thisArg             	The object you want to become this inside the function.
arg1, arg2, ...	        normal arguments you want to pass to that function (separated by commas). */

function introduce(city, country) {
  console.log(`Hi, I'm ${this.name} from ${city}, ${country}`);
}

const person = { name: "Bob" };

// Call introduce with this = person, and pass arguments
introduce.call(person, "Delhi", "India");
// Output: Hi, I'm Bob from Delhi, India

/*an pass this keyword as the first argument in .call(). but use-
When you're inside a method and want to pass the current context (this) to another function.(as we done in above example by chai video)
Example: sharing the current object's data with another function dynamically. */