/*Singleton object declaration / Constructor Function Object 

Singleton only one instance (object) is created and reused everywhere.
In other words:
If you try to create the same object again, you don’t get a new one.You always get the same object reference.

“object literals are not singleton” → because you can create multiple independent copies just by writing {} again.
 By default, a constructor function also creates new objects every time.So even constructors are not singleton by default.
 but in constructor You can add logic to restrict it to only one instance → making it a singleton. 
 
Singleton = only one instance (object) shared everywhere).
Object literals ({}) → Not singleton (new object every time).
Constructor/class + logic → Can enforce singleton.
Useful when you want only one control center → e.g. database connection, config file, logging system.
 */ 






// ------- Object inside the object ------ nesting og obejct
const person={
    email:"some@gmail.com",
    fullname : {                   //object inside object -------------
            userfullname:{         //object inside a object which in inside a object
                firstname:"mayuri",
                lastname:"agrawal"
            }
    }
}

console.log(person.fullname)    //access obejct inside object
console.log(person.fullname.userfullname)      //acces object inside object which is inside object
console.log(person.fullname.userfullname.firstname)   //acces value inded nested object






//Merge two objects   

// 1.assign method

/*Object.assign()

Syntax:
--------  Object.assign(target, ...sources)    ----------

target → object where properties will be copied.
sources → one or more objects whose properties are copied.

It copies properties from source objects to the target object. */
const obj1 ={1: "a" , 2: "b" , 3: "c"}
const obj2 ={4: "d" , 5: "e" , 6: "f"}

const obj3=Object.assign({},obj1,obj2) //here we give { } in start because we we want it be conacte and bcame a new object but
//  if we do not write {} it will store in obj1 bsc obj1 is used as the target, it gets modified directly. 
// as we know that first entry is target where the merget object stores
//👉 Here {} is an empty object → so obj3 becomes a new merged object.👉 obj1 and obj2 are safe (not modified).
console.log(obj3) 


//2. spread (...)
const obj4={...obj1,...obj2}
console.log(obj4)



// ---getting all keys of object
console.log(Object.keys(obj1))//it will return array of keys of given object --remember about arrya as we can use loops on it in future--

//--=getting all values
console.log(Object.values(obj1)) //it will aslo return arrya of values

//entries method
console.log(Object.entries(obj1)) //Object.entries(obj) returns an array of key–value pairs of the object in the form:
// [ [key1, value1], [key2, value2], ... ]


// --hasOwnProperty -- 
console.log(obj1.hasOwnProperty("1")) //checls if given property present or not