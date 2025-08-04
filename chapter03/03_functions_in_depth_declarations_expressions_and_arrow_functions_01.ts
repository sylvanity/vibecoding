// Snippet 01 from Chapter 3
// Section: Functions In-Depth
// Subsection: Declarations, Expressions, and Arrow Functions
// Language: typescript
// Description: function greet(name: string): string {
// 
function greet(name: string): string {
  return `Hello, ${name}!`;
}

let message = greet("World"); // Call the function
console.log(message); // Output: Hello, World!