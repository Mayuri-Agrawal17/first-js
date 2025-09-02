/*-----------forEach-------------

👉 forEach is a built-in method available on arrays in JavaScript.
👉 It is used to run a function for every element of the array.

Think of it like saying:
“Hey array, for each item you have, run this function.” 


-------------Syntax
array.forEach(function(element, index, array) {
   // code to run on each element
});

--------Parameters explained:
element → current item of the array.
index → position (number) of the current item.
array → the whole array itself.


In forEach, the function gives you 3 parameters by default:(element, index, array)
👉 But you are free to use only the ones you need.*/

//only element (name here)
const student=["mayuri","rajveer","pankhudi","varsha","chinu","gunnu"]
student.forEach(function(name){
   console.log(`namr of student is ${name}`)
})

//Arrow function with foreach
student.forEach((name)=>{
   console.log(name)
})

//only index
student.forEach((_,index)=>{  //Here, _ means "I know an element is there, but I don’t care about it".
   console.log(index)
})

/*The _ here is just a variable name — like num, index, value, etc.
It has no special meaning in JavaScript (unlike in some other languages like Python).

👉 Developers often use _ when:
They don’t care about that parameter (just a placeholder).
To make code cleaner and easier to read. */


//only array
student.forEach((_, __,array)=>{ // simirally we use _ and __ as two parameter here as we want to ignore both here 
   console.log(array)
})

//element and index
student.forEach((name,index)=>{
   console.log(`student name ${name} is at index ${index}`)
}) 

//elemrnt index and array
student.forEach((name,index,array)=>{
   console.log(`name ${name} at ${index} from ${array}`)
})

/*-------------important point
1. console.log(array)
Here you are directly logging the array.
JavaScript prints it as an actual array object, so you see:

o/p-[ 'mayuri', 'rajveer', 'pankhudi', 'varsha', 'chinu', 'gunnu' ] 
It still “remembers” it’s an array — so in the browser dev tools, you can even expand/collapse it.



2. console.log(${array})
This is a template literal (string interpolation).
JavaScript converts the array into a string before printing.
Arrays in JS, when converted to string, become a comma-separated list of elements.

o/p--mayuri,rajveer,pankhudi,varsha,chinu,gunnu
Now it’s just a plain string, not an array anymore. You cannot expand/collapse it.*/

// if ypu have a already made function then we can use that directly
function print(name,index){
   console.log(name,index)
}
student.forEach(print)

//how to use for each when you have object as array elemetns ****very importanat*****
const coding=[
   {
      languagename:"javascript",
      languagefile:"js"
   },
   {
      languagename:"java",
      languagefile:"java"
   },
   {
      languagename:"python",
      languagefile:"py"
   }
]

coding.forEach((element)=>{
   console.log(`language name ${element.languagename} and its file name is ${element.languagefile}`)
})

/*🚨-------------------------- Important points about forEach

forEach is only available for arrays (not objects, not Maps, etc.).
It does not return anything. It always returns **undefined**.
You cannot break/continue inside forEach.
It always runs through the entire array. */

//for ech returns undefined
const returnvalue=student.forEach((item)=>{
   console.log(item)
   // return item ;   even if we return something manually like this still it will return undefined
})
console.log(returnvalue) //undefined