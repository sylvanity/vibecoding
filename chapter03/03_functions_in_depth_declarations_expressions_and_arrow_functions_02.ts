// Snippet 02 from Chapter 3
// Section: Functions In-Depth
// Subsection: Declarations, Expressions, and Arrow Functions
// Language: typescript
// Description: const farewell = function(name: string): string {
// 
const farewell = function(name: string): string {
  return `Goodbye, ${name}!`;
};

let parting = farewell("Cruel World");
console.log(parting); // Output: Goodbye, Cruel World!

// Calling before assignment would cause an error