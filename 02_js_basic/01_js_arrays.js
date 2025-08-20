/* --An array is a special type of object in JavaScript.
--It is used to store multiple values in a single variable.
--Values can be of any type (numbers, strings, booleans, objects, even functions) unlike in java we have to declare the type of 
   element store in array like int arr[].
--Arrays are dynamic → size can change anytime.unlike java in which size of array if fixed that why we use arraylist there. */

let myArr =[1,2,3,4,5,true,"mayuri"] //elements will be inside []
console.log(myArr) 
//another way to declare array
let arr = new Array(1,2,3) // Array object
console.log(arr)


// Arrays in JS are reference types → stored in heap memory.
// Copying an array makes a reference (both point to same memory).
//array makes shallow copies not deep copies, i.e. any change in araay will make change in original array
let a = [1,2,3];
let b = a; 
b[0] = 99;
console.log(a); // [99,2,3] → original also changed


// Access value from array
console.log(myArr[5]) //value at index 5

// modifining value
myArr[0]=11
console.log(myArr)

//important property
console.log(myArr.length) //gives length of the array

// Methons in Array
myArr.push(4) // → [ 11, 2, 3, 4, 5, true, 'mayuri', 4 ]	Add at end
console.log(myArr)

myArr.pop()  //→[ 11, 2, 3, 4, 5, true, 'mayuri' ] removes last	Remove last
console.log(myArr)

myArr.unshift(0)  //→[ 0, 11, 2, 3, 4, 5, true, 'mayuri' ]Add at start but we mostly avoid using it because it changes the index of awll element
console.log(myArr)

myArr.shift()  //→ [ 11, 2, 3, 4, 5, true, 'mayuri' ]	Remove first
console.log(myArr)

console.log(myArr.includes("mayuri")) //gives ture if value exist in array ohterwise false

console.log(myArr.indexOf("mayuri")) // return thr index of given value if it is present in the array if not present will return -1

let arrStr=myArr.join()//convert Rarray into string 11,2,3,4,5,true,mayuri same element in , seprated form ad when you check 
// the data type using typeOf it will give string
console.log(arrStr) 
console.log(typeof(arrStr)) //string


let arrSlice = myArr.slice(1,4) //slice return the value of given index from starting index(1 here) to the last index-1(4-1=3 here) 
console.log(arrSlice)  
console.log(myArr) // leaves no chnage in original array

let arrSplice = myArr.splice(1,4) //splice return the value of given index from starting index(1 here) to the last index(4 here)
console.log(arrSplice)
console.log(myArr)// but it changes the original array by removing the splice elemnets from original array