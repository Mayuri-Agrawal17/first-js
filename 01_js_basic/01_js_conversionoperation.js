let score = 33
let score1="33"

console.log(typeof score)
console.log(typeof score1)


console.log("-----------------------------")
// convert String type of data into Number 
let valueInNumber = Number(score1)//N in number should allwasys be in capital
console.log(typeof valueInNumber)
console.log(valueInNumber)


console.log("-----------------------------")
/* here in previous example the string value was pure number so the conversion will be correct but js will convert it into number type
(when you check the type of converted value) if it is not a pure form of number(likr 33abs)but when you print the value of converted 
number it will peint NaN (Not a number) so the typr conversion has little ambiguity in it so remember to check it everytime that input 
value is pure number */

let score2="33abc"
let valueInNumber1 = Number(score2)
console.log(typeof valueInNumber1)
console.log(valueInNumber1 )


console.log("-----------------------------")
/*When you convert null to a number in JavaScript, it becomes 0 null means “nothing” — but when converted to a number,
 it is treated as zero (0). but null and 0 are not the same thing. */

let score3=null
let valueInNumber2= Number(score3)
console.log(typeof valueInNumber2)
console.log(valueInNumber2)


console.log("-----------------------------")
/*  when you convert undefined into number it will give NaN */

let score4=undefined
let valueInNumber3=Number(score4)
console.log(typeof valueInNumber3)
console.log(valueInNumber3)

console.log("-----------------------------")
/*if we give boolean valut it will give 1 for true as true means 1 and 0 for false as false means 0 */
let score5=true
let valueInNumber4=Number(score5)
console.log(typeof valueInNumber4)
console.log(valueInNumber4)


console.log("-----------------------------")
/* if their is a proprer string which cannot convert into number that it will give NaN */
let score6="mayuri"
let valueInNumber5= Number(score6)
console.log(typeof valueInNumber5)
console.log(valueInNumber5)