// Snippet 53 from Chapter 3
// Section: Object-Oriented Programming (OOP) Basics
// Subsection: Classes: Blueprints for Objects
// Language: typescript
// Description: class Greeter {
// 
class Greeter {
    // Property declaration with type annotation
    greeting: string;

    // Constructor to initialize the property
    constructor(message: string) {
        this.greeting = message; // 'this' refers to the instance being created
    }

    // Method
    greet(): string {
        return "Hello, " + this.greeting;
    }
}

// Create an instance (object) of the Greeter class
let greeterInstance = new Greeter("world");

// Call the method on the instance
console.log(greeterInstance.greet()); // Output: Hello, world