// Snippet 54 from Chapter 3
// Section: Object-Oriented Programming (OOP) Basics
// Subsection: Access Modifiers (public)
// Language: typescript
// Description: class Animal {
// 
class Animal {
    public name: string; // Explicitly public (same as default)
    private age: number; // Only accessible within Animal class
    protected species: string; // Accessible within Animal and subclasses

    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    public move(distanceInMeters: number): void {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
        this.logAge(); // Can access private member internally
    }

    private logAge(): void {
        console.log(`Internal log: Age is ${this.age}`);
    }

    protected getSpeciesInfo(): string {
        return `Species: ${this.species}`;
    }
}

let dog = new Animal("Buddy", 5, "Dog");
dog.move(10); // OK (public method)
console.log(dog.name); // OK (public property)
// console.log(dog.age); // Error: Property 'age' is private...
// console.log(dog.species); // Error: Property 'species' is protected...
// dog.logAge(); // Error: Property 'logAge' is private...