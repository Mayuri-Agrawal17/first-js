/*A class in JavaScript is like a blueprint for creating objects that share similar properties and methods.

Think of it like a cookie cutter 🥠:
The class = cutter (blueprint)
The objects = cookies created from it */

class User{
    constructor(userName,passWord,age){    //The constructor in JavaScript is a special method that runs automatically when you create 
                                           //a new object from a class — even if you don’t explicitly call it.
        this.userName=userName 
        this.passWord=passWord
        this.age=age
    }
    changeUser(){
        return `${this.userName.toUpperCase()}`
    }
}

const mayuri=new User("mayuri","123",24)
console.log(mayuri.changeUser())

//behind the scenes it will do the below thing as in js class is judt a sugar coating

function User1(userName,passWord,age){
    this.userName=userName 
    this.passWord=passWord
    this.age=age
}

User1.prototype.changeUser=function(){
    return `${this.userName.toUpperCase()}`
}

const rajveer=new User1("Rajveer","456",26)
console.log(rajveer)
console.log(rajveer.changeUser())
/*Behind the Scenes:
JavaScript classes are not real classes like in Java or C++.
They are special syntax over prototypes.
This means under the hood, classes still use prototypes to share methods. */