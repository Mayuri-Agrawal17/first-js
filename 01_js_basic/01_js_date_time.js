/*Date is a built-in object in JavaScript to work with dates and times.
It stores time internally as milliseconds (ms) from Jan 1, 1970, UTC (the Unix Epoch) */


let myDate = new Date();
// console.log(typeof myDate)
// console.log(myDate)
// console.log("to string --- "+myDate.toString())
// console.log("to localstring --- "+ myDate.toLocaleString())
// console.log("to datestring --- "+myDate.toDateString())
// console.log("to jason --- "+myDate.toJSON())

/*-------------------------------------------------------------------------------------------------------- */



// create manual date
let myCreatedDate = new Date(2001,5,17)   //formate(YY-MM-DD)In js months count starts with 0 not 1 like jan = 0 

// console.log(myCreatedDate)
// console.log(myCreatedDate.toDateString())

//another formate to create date
// let createDate = new Date("2001,5,17")//formate(YY-MM-DD)but here month will treate as normal bcs we are giving direct date i.e 5=may

// console.log(createDate.toDateString())

//Another
// let createDate1= new Date("05-17-2001")
// console.log(createDate1.toLocaleString())

// timestamp
let timestamp= Date.now()
console.log(timestamp)

// get methods in date 
const d = new Date();

console.log(d.getTime());       // milliseconds since Jan 1, 1970 
d.getFullYear();   // 2025
d.getMonth();      // 7 (August, because Jan = 0)
d.getDate();       // 17
d.getDay();        // 0 = Sunday, 6 = Saturday
d.getHours();      // 10
d.getMinutes();    // 45
d.getSeconds();    // 30
d.getMilliseconds(); // 123

