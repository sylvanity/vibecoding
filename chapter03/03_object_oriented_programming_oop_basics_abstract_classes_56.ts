// Snippet 56 from Chapter 3
// Section: Object-Oriented Programming (OOP) Basics
// Subsection: Abstract Classes
// Language: typescript
// Description: abstract class Shape {
// 
abstract class Shape {
    abstract getArea(): number; // Abstract method - must be implemented by subclasses

    // Concrete method
    displayInfo(): void {
        console.log(`This is a shape with area: ${this.getArea()}`);
    }
}

class Circle extends Shape {
    constructor(public radius: number) {
        super();
    }

    // Implement the abstract method
    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

// const shape = new Shape(); // Error: Cannot create an instance of an abstract class.
const circle = new Circle(5);
circle.displayInfo(); // Output: This is a shape with area: 78.539...