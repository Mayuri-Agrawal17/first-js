/*--------------------------OPERAIONS--------------------------- */

console.log(2+2)//addition
console.log(2-2)//subtraction
console.log(2*2)//multiplication
console.log(2/2)//division
console.log(2%2)//modules/give remainder

// string concatination
let str1 = "hello"
let str2= " mayuri"

console.log(str1+str2)

/*JavaScript runs code left to right, and it decides whether to add numbers or join (combine) strings based on what it sees first. */


console.log(1+2+"2")

/*Let’s break it step by step:
1 + 2 → both are numbers → result is 3
Now: 3 + "2" → number + string → JS converts 3 to string and joins them
Result: "3" + "2" → "32"  */

console.log("1"+2+3)
/*Step by step:
"1" + 2 → string + number → JS converts 2 to "2" → result is "12"
"12" + 3 → again string + number → JS converts 3 to "3" → result is "123" ✅*/