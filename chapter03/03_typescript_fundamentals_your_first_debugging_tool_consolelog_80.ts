// Snippet 80 from Chapter 3
// Section: TypeScript Fundamentals
// Subsection: Your First Debugging Tool: console.log
// Language: typescript
// Description: let greeting: string = "Hello, TypeScript!";
// 
let greeting: string = "Hello, TypeScript!";
let year: number = 2025;
const isActive: boolean = true;

// Log a simple string message
console.log("Script started!");

// Log the value of a variable
console.log(greeting); // Output: Hello, TypeScript!

// Log multiple values (they will be separated in the console)
console.log("Current year:", year, "Is active:", isActive);
// Output: Current year: 2025 Is active: true

// Log calculated values
let score = 95;
console.log("Score percentage:", score / 100); // Output: Score percentage: 0.95