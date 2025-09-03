/*------map() in JavaScript

map() is an array method.
It creates a new array by applying a function to each element of the original array.
The length of the new array is always the same as the original one.
It does not change the original array.

👉 In short:
“Take an array → apply a transformation to each element → return a new array with transformed values.” 

-------Syntax
array.map(function(element, index, array) {
   // return transformed value
})

---Or with arrow function:

array.map((element, index, array) => newValue)


🔹 Parameters of map() callback
The callback function of map() gives you 3 arguments:
element → The current element of the array.
index → The index (position) of that element.
array → The original array itself.

👉 Usually we just use element.*/

const number =[1,2,3,4,5,6,7,8,9]
const doubled=number.map((num)=> num*2)
console.log(doubled)


const names=["rajveer", "mayuri","panKhuDi"]
const upper_case=names.map((name)=> name.toUpperCase())
console.log(upper_case)


//--------------Chaining with other methods
const nums=[1,2,3,4,5]
const result = nums
         .map(num=>num*2)
         .filter(num => num>5)
         .map(num=>num+1)

console.log(result) //[ 7, 9, 11 ]
console.log(nums)  //[ 1, 2, 3, 4, 5 ]

/*-------------Line-by-line explanation

->const nums = [1, 2, 3, 4, 5];
We make an array named nums that contains five numbers.
This array is the original data and it stays unchanged by the operations below.

->.map(n => n * 2) (Step A)
map looks at every element in nums. For each element it runs the function n => n * 2.
For 1 it returns 2, for 2 → 4, 3 → 6, 4 → 8, 5 → 10.
map returns a new array of the same length: [2, 4, 6, 8, 10].
Important: the original nums is not changed.

->.filter(n => n > 5) (Step B)
filter takes the array from the previous step ([2,4,6,8,10]) and checks each value with n > 5.
It keeps only the items where the test is true. Tests: 2>5 false, 4>5 false, 6>5 true, 8>5 true, 10>5 true.
Result is a new array with only the passing items: [6, 8, 10].

->.map(n => n + 1) (Step C)
This map runs on the filtered array [6, 8, 10]. For each value it returns n + 1.
So 6→7, 8→9, 10→11.
The result is a new array [7, 9, 11].

--------Extra details you should know (short)

Each step creates a new array. There are intermediate arrays: after first map → [2,4,6,8,10]; after filter → [6,8,10]; final map → [7,9,11].
Callbacks receive 3 arguments: (element, index, array) but we only used the first (n) in this example.
map always keeps the same length as the array it received; filter can change length.
Chaining reads left → right. If you swapped the order (filter before map) results would differ.
Original array unchanged — chaining is non-mutating for map and filter. */