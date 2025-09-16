#JavaScript does not have true classes like Java or C++.
Instead, classes in JS are just “syntactic sugar” 🧁 over its prototype-based inheritance system.

1. In Java, C++ vs JavaScript:
Feature	         |  Java / C++ (True Classes)	J     |   JavaScript (Class Syntax)
Class Type	     |  Real, built into the language	  |   Fake — just sugar over prototypes
Objects Created	 |  From a blueprint (class)	      |   From a constructor function with prototype
Inheritance	     |  Class-based	                      |   Prototype-based
Behavior	     |  Methods are copied to each object |	  Methods are shared via prototype


OOP is a programming paradigm (way of writing code) that focuses on objects.

Definition:
OOP in JavaScript is a way to organize and structure your code using objects that contain:

Properties (variables → data)
Methods (functions → behavior)

But JavaScript is different:
In languages like Java/C++, OOP is class-based.
In JavaScript, OOP is prototype-based, meaning objects inherit directly from other objects, not classes.

Key Idea:
In JS, everything is an object, and prototypes are used for inheritance.