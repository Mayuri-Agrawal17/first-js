console.log(2<1)
console.log(2<=1)
console.log(2>1)
console.log(2>=1)
console.log(2==1)
console.log(2!=1)


console.log("-------------------------------")

// and many more basic comparision


// but what if the type of comparing value is different

console.log("1">2) //it may give you correct result but the result will not be pretictable to we should avoid this practice and make 
                  // sure the data type is same

console.log("2"===2) //=== checks TYPE + VALUE  i.e. IT WILL CHECK IF THE TYPE OF THE GIVEN VALUE TO COMPARE IS SAME + THE
//  VALUE IS ALSO SAME THAT ONLY GIVES TRUE        in normal === it will do type conversion and give answer according to the value  


console.log("-------------------------------")

//what is we compare null with number 0
console.log(null==0)  //false ,	== checks loosely, but null is only loosely equal to undefined, not to 0
console.log(null===0)  //false	=== checks type + value — null is object-type, 0 is number
console.log(null>0)   //	false	JS converts null to 0 → 0 > 0 is false
console.log(null<0)   //false	0 < 0 is false
console.log(null>=0)  //true	JS converts null to 0 → 0 >= 0 is true ✅
console.log(null<=0)  //true	0 <= 0 is true ✅

/*😕 Why this is confusing?
Because:

In comparisons (<, >, <=, >=), JavaScript converts null to number 0

But in equality (==), it does not convert it to 0 — only treats it equal to undefined */



//=== checks TYPE + VALUE  i.e. IT WILL CHECK IF THE TYPE OF THE GIVEN VALUE TO COMPARE IS SAME + THE VALUE IS ALSO SAME THAT ONLY 
// GIVES TRUE