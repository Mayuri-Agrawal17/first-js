// 👉 A function is a block of reusable code that performs a specific task.
// We use it to avoid repeating code and to organize logic.

//===================================================================

//Function defination
//1.
greed() //calling function brefore defining it

// This type of function defination is Hoisted (can call before defining).
function greed() {    //Created with the function keyword.
    console.log("Hello sir from function 1")
}


//2.
// Not hoisted (must define before use).
const greed2 = function(){        //Stored in a variable.
    console.log("Hello sir from function 2")
}
greed2() //calling function after defining it.


//3. 
// Parameter vs arguments
function addition(num1, num2){     //Parameters (no need to give the data type in js) 
    console.log(`additon of number ${num1+num2}`)
}

addition(6,5)       //arguments
// if are not passing any argumrnts in fun call than in case of return in funtion(like below example) it will return undefined and
//  in case of no return infuntion (like above example) the it will give NaN(not a number)

// 4.
//funtion with return statement
function subtraction(num1, num2){
    return (`subtraction function with return statement ${num1-num2}`);

    //or
    //const resultnum1-num2
    // return result;
}

console.log(subtraction(5,2)) //if their is no return in function bosy like previous functions then console here will given undefined 
// because in function we are printing something not returning. unlike here it will print 3 and if we dont use console while returning
// something from funtion and only do function call(like previous example)then nothing will print



//------------special point----------------
// javaScript is a dynamically typed language.unlike Java is a statically typed language.(we give datatype for everything in java)
// You don’t specify data types for parameters.
// Any type of value can be passed — numbers, strings, booleans, even objects or functions.
// Type checking happens only at runtime (not at compile time).

function add(a, b) {
  return (`addition function without typecheck of datatype and passing al type of arguments ${a + b}`);
}

console.log(add(5, 3));      // 8 (number + number = number)
console.log(add("5", 3));    // "53" (string + number = string concat)
console.log(add(true, 3));   // 4 (true is treated as 1 → 1 + 3)
//to avoid wrong results we will use contional statemenst (like if else) will learn in future


// 5. Default Parameters
function greet(name = "Guest") {
  console.log(`Hello ${name} this is function with default agrument`);
}
greet(); // "Hello Guest"  //here in case of no arguments it will return default value we have given
greet("Rahul"); // "Hello Rahul" //and if arugument is present then it will overwrite the default value


//6. Rest Parameter (...)
// 👉 Collects multiple arguments into an array.
//below their is only 1 parameter & we are passing multiple arguments still it is taking all the arguments and storing it in array

function calculateCartPrice(...numbers) {
  return numbers;
}
console.log(calculateCartPrice(100, 200, 345,600));    // [ 100, 200, 345, 600 ]later accordingly we canapply operations on it.

function calculateCartPrice1(var1,var2,...num1){
    return num1
}
console.log(calculateCartPrice1(100,200,345,600)) //[ 345, 600 ] here val1&val2 will store the first 2 values and remaining will get
//  stored in ...num1 and as we are printing num1 we are getting this value


//7. passing object in function
// 1st way
const user={
  name:"Mayuri",
  age:24,
  city:"Indore"
}
function handleObject(anyObject){
  return (`hi my name is ${anyObject.name} my age is ${anyObject.age}. i am from ${anyObject.city} (separately object passing in fun)`);
}
console.log(handleObject(user))

//2nd way
function handleObject1(anyObject){
  return (`hi my name is ${anyObject.name} my age is ${anyObject.age}and in live in  ${anyObject.city} (object passing directly)`)
}
console.log(handleObject1({
  name:"Rajveer",
  age:26,
  city:"puchku's heart"
}))


//8.Array as function agrument
// 1st way
const list=[100,65,85,45]
function returnSecondValue(anyArray){
  return anyArray[1]
}
console.log(returnSecondValue(list))

// 2nd way
function returnFirstValue(anyArray){
  return anyArray[0]
}
console.log(returnFirstValue([100,65,85,45]))