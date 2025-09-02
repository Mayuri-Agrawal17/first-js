/*---------filter() in JavaScript?
filter() is an array method.
It creates a new array with elements that pass a test (condition).
It does not change (mutate) the original array.
The test is given as a callback function.

👉 In short:
“Take an array → check each element with a condition → keep only those elements that pass → return a new array.”

Syntax
array.filter((element, index, array) => condition)  store it in any varibale*/

const marks=[10,20,45,65,88,90,63,10,77,87,99,100]
const distintion=marks.filter((num)=> num>=75)
//here as we have wrote condition without {} (num>=75 here) then it is returning directly but if we write it with {} 
// then we need to use return keyword before condition 
console.log("distintion" +" "+ distintion)

//with { } and return
const no_distintion= marks.filter((num)=>{
    return num<=74
})
console.log("no distintion" + " "+ no_distintion)

/*Important Points / Exceptions
filter() always returns a new array (never changes original).
If no condition is true, result is [] (empty array).
The callback must return true (keep it) or false (remove it).
If you forget to return, result will be [] . */