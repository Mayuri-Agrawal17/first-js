/*
->Prototype Means Inheritance / Sharing
Prototype allows objects to share methods and properties without duplicating.
E.g. methods placed on ConstructorFunction.prototype are accessible to all instances.

->new Keyword Behavior
    When you use new X(...):
        A new empty object is created.
        That object’s internal __proto__ is set to X.prototype.
        The constructor function X is called with this = new object.
        If the constructor doesn’t explicitly return something, the new object is returned.

->this Context in Constructor & Prototype Chain
    this inside constructors or methods refers to the object instance.
    Example: instance method accessing this.someProperty.

->How JS Looks Up Methods / Properties (Prototype Chain)
    If instance doesn’t have a property, JS looks in its prototype, then in the prototype’s prototype, and so on until null.
    That’s why methods on the prototype work even on objects created earlier.

->Prototype of Built-in Types
    Arrays, Strings, Functions are also objects, have prototypes. E.g. Array.prototype, String.prototype.
    So even array objects have methods (push, map, etc.) because of prototype.

->Modifying Prototypes after Object Creation
    If you add a method to a constructor’s prototype after creating instances, those instances still get the method (because of the prototype link).
    Example: Person.prototype.sayBye = function(){…}.

->Prototype vs __proto__ vs .prototype
    .prototype is a property on constructor functions, which defines what prototype instances will use.
    __proto__ is a link in instances pointing to their prototype.
    instance.__proto__ === Constructor.prototype.

->Everything is Object (almost)
    Functions are objects (they have properties, prototypes, methods).
    Strings/arrays are objects under the hood. */

//-----------------------------------------------------------------------------------------------------------------------------------

//Prototype is like a shared blueprint.
//If we define methods on the prototype, all objects can use them without duplicating code.


function Person(name) {
  this.name = name;  // Each object will get its own 'name'
}

Person.prototype.sayHello = function() {     //Person.prototype.sayHello → method added to prototype, not copied to each object.
  console.log(`Hello, my name is ${this.name}`);
};

//p1 and p2 both share the same sayHello method through the prototype
const p1 = new Person("Alice");
const p2 = new Person("Bob");

p1.sayHello();  // Hello, my name is Alice
p2.sayHello();  // Hello, my name is Bob

//--------------------------------------------------------------------------------------------------------------------------------------

//When you use new, four steps happen automatically.

function Car(brand) {
  this.brand = brand; 
}

const car1 = new Car("Toyota");
console.log(car1.brand); // Toyota

/*What happens internally:

new creates an empty object: {}
Links it → car1.__proto__ = Car.prototype
Runs the Car function with this pointing to the new object
Returns the object */

//------------------------------------------------------------------------------------------------------------------------------------

//If a property doesn't exist on the object, JS searches its prototype chain.

const parentObj = {
  greet: function() {
    console.log("Hello from parent!");
  }
};

const childObj = Object.create(parentObj); // childObj.__proto__ = parentObj
childObj.name = "Alice";

childObj.greet(); // Hello from parent!
//childObj doesn’t have greet, so JS looks at its prototype (parentObj).
// If not found there, it keeps climbing until Object.prototype, then null.

//------------------------------------------------------------------------------------------------------------------------------------

//We can add prototype methods anytime, and old objects still get access.

function Student(name) {
  this.name = name;
}

const s1 = new Student("Alice");

Student.prototype.sayHi = function() {
  console.log(`Hi, I'm ${this.name}`);
};
s1.sayHi(); // Hi, I'm Alice

// Explanation:
// Even though s1 was created before sayHi was added,
// It still works because s1.__proto__ points to Student.prototype.

//-------------------------------------------------------------------------------------------------------------------------------------

//.prototype vs __proto__

// .prototype → property on constructor functions.
// __proto__ → property inside every object, pointing to its prototype.

function Vehicle() {}
const car = new Vehicle();

console.log(Vehicle.prototype); // Prototype object
console.log(car.__proto__);     // Same object as Vehicle.prototype
console.log(car.__proto__ === Vehicle.prototype); // true