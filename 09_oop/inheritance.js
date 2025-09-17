/*Inheritance means one class (child/subclass) can use the properties and methods of another class (parent/superclass) 
without rewriting the code. 

We use the extends keyword to create a child class and the super() function to access the parent class's constructor or methods.*/

class Animal{
    constructor(bread,color){
        this.bread=bread
        this.color=color
    }
    detail(){
        console.log(`the availabe bread is ${this.bread} and its color is ${this.color}`)
    }
}

class dog extends Animal{
    constructor(bread,age,healthy){
        super(bread)
        this.age=age
        this.healthy=healthy
    }
    overview(){
        console.log(`${this.bread} is availabe. age is ${this.age} months and is healthy ${this.healthy}`)
    }
}

const husky= new dog("husky",1,"yes")
husky.overview()