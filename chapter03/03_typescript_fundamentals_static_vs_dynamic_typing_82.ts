// Snippet 82 from Chapter 3
// Section: TypeScript Fundamentals
// Subsection: Static vs. Dynamic Typing
// Language: typescript
// Description: let message: string = "Hello"; // Explicitly typed...
// 
let message: string = "Hello"; // Explicitly typed as string
console.log(message.toUpperCase()); // Works fine

// message = 100; // COMPILE ERROR! Type ``number'' is not assignable to type ``string''.
// The error is caught *before* running the code!