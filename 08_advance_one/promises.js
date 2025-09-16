/*Promises in JavaScript — 
a Promise is an object that represents a value that may arrive later — success (fulfilled) or failure (rejected). 
It lets you write asynchronous code in a predictable, chainable way.

Core idea (very simple)
A promise is like a promise from someone: 
they either keep it (give you a result) 
or break it (give you an error) 
and they might do that now or later.

You attach handlers (.then, .catch, .finally) to react when the promise is fulfilled or rejected. 


States of a Promise-
Pending — not finished yet.
Fulfilled (resolved) — completed successfully; has a value.
Rejected — failed; has a reason (an error).*/

//Create Promises-

/*  ->>const promiseOne = new Promise((resolve, reject) => {
This creates a new Promise and stores it in the constant promiseOne.

resolve and reject are functions provided by the runtime:
-call resolve(value) to mark the promise fulfilled with value.
-call reject(reason) to mark the promise rejected with reason (often an Error).*/

const promiseOne = new Promise(function(resolve,reject){       
    //can do an async task like-databse call,cryptography , network etc.
    setTimeout(function(){                                           //running a a basic function
        console.log("async task is complete")
        resolve()       //This stores the value(if we pass something inside it) inside the promise and changes its state to fulfilled.
                        // .then() is listening for the promise to be fulfilled.When it happens, 
                        // .then() runs and receives whatever was passed to resolve().(here we didnt pass anything)
    },500) 
})

//Now the promise promiseOne exists (pending). Next we attach handlers:(consume the promise)
promiseOne.then(function(){     //.then does not run immediately — when the promise resolves, the handler is scheduled as a microtask
                                //(runs after the current JS stack finishes and before the next macrotask).
    console.log("promise consumed");
    
})


//can do the same thing in below way
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("promise 2 consumed")
})

//----------------------------------------------------------------------------------------------------------------------------------

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:"mayuri",email:"mayuri@example.com"}) //passing valuse in resolve usually we pass object in it
    },1000)
})
promiseThree.then(function(user){            //taking value in then passed by resolve
    console.log(user)
})

//----------------------------------------------------------------------------------------------------------------------------------

const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=true                 //here we hardcoded that their is a error
        if(!error){
            resolve({userName:"rajveer",password:"123"})
        }else{
            reject("erroe!,Something went wrong")       //similar to resolve , reject change the state to failed and .catch() 
                                                        //listens it and recieve whatever we pass to reject
        }
    },1000)
})
promiseFour
.then((user)=>{
    console.log(user)
})
.catch((err)=>{
    console.log(err)
})

//----------------------------------------------------------------------------------------------------------------------------------

//chaining of then()
const promiseFive= new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=false
        if(!error){
            resolve({userName:'pankhudi',password:"123456"})
        }else{
            reject("error!")
        }
    }, 1000);
}) 
promiseFive
.then((user)=>{
    console.log(user)
    return user.userName    
/*If a .then handler returns a value, the next .then receives that value; if it returns a promise, the chain waits for that promise.
If a .then throws an error (or returns a rejected promise), the next .catch receives it. */
})
.then((username)=>{        //Each .then gets the previous result; you may return a plain value or a promise.
console.log(username);
})
.catch((err)=>{
    console.log(err)
})

//----------------------------------------------------------------------------------------------------------------------------------


const promiseSix= new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=false
        if(!error){
            resolve({userName:'pankh',password:"12"})
        }else{
            reject("error! haiiii")
        }
    }, 1000);
}) 
promiseSix
.then((user)=>{
    console.log(user)
    return user.userName    
})
.then((username)=>{        
console.log(username);
})
.catch((err)=>{
    console.log(err)
})
.finally(()=>{                               //.finally runs in both cases (fulfilled or rejected) — good for cleanup.
    console.log("the promise id either resolve or rejected")
})

//--------------------------------------------------------------------------------------------------------------------------------------

//we can also use async and await in place of then and catch to consume promises
const promiseSeven=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true
        if(!error){
            resolve({userName:"javascript",user:"123456"})
        }else{
            reject("error!,JS went wrong")
        }
    },1000)
})

/*async is placed before a function.
It always returns a promise, even if you don't explicitly return one.
Inside an async function, you can use the await keyword. */
async function consumePromiseSeven(){
    //When using async / await, handle errors with try...catch.
    try {
        const response= await promiseSeven 
        /*await pauses the execution of the async function until the promise resolves or rejects.
        It waits for the promise to finish and gives you the result directly — no .then() needed.

        Important:
        await can only be used inside an async function. */
        console.log(response)
    } catch (error) {
        console.log(error)
    }
   
}
consumePromiseSeven()

//-----------------------------------------------------------------------------------------------------------------

