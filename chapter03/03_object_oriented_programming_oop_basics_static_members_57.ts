// Snippet 57 from Chapter 3
// Section: Object-Oriented Programming (OOP) Basics
// Subsection: Static Members
// Language: typescript
// Description: class MathHelper {
// 
class MathHelper {
    static readonly PI: number = 3.14159; // Static property (constant)
    static instanceCount: number = 0;    // Static property (counter)

    constructor() {
        MathHelper.instanceCount++;
    }

    static add(x: number, y: number): number { // Static method
        return x + y;
    }
}

console.log(MathHelper.PI); // Access static property via class name -> 3.14159
console.log(MathHelper.add(5, 10)); // Call static method -> 15

let helper1 = new MathHelper();
let helper2 = new MathHelper();
console.log(MathHelper.instanceCount); // Access static property -> 2