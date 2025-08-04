// Snippet 55 from Chapter 3
// Section: Object-Oriented Programming (OOP) Basics
// Subsection: Inheritance (extends)
// Language: typescript
// Description: class Dog extends Animal {
// 
class Dog extends Animal {
    // Inherits name, species, move(), getSpeciesInfo()
    // Does NOT inherit private members like age, logAge()

    constructor(name: string, age: number) {
        // Call the parent class (Animal) constructor
        super(name, age, "Dog");
    }

    // Method specific to Dog
    bark(): void {
        console.log("Woof! Woof!");
    }

    // Override the move method (optional)
    move(distanceInMeters: number = 5): void {
        console.log("Running...");
        super.move(distanceInMeters); // Call the parent's move method
    }

    displaySpecies(): void {
        // Can access protected member from parent
        console.log(this.getSpeciesInfo());
    }
}

let myDog = new Dog("Rex", 3);
myDog.bark(); // Output: Woof! Woof!
myDog.move(20); // Output: Running... Rex moved 20m. Internal log: Age is 3
myDog.displaySpecies(); // Output: Species: Dog
// console.log(myDog.age); // Error: Property 'age' is private...
// console.log(myDog.species); // Error: Property 'species' is protected...