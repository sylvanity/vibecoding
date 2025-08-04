// Snippet 03 from Chapter 3
// Section: Functions In-Depth
// Subsection: Declarations, Expressions, and Arrow Functions
// Language: typescript
// Description: const add = (a: number, b: number): number => {
// 
// Concise syntax for simple functions
const add = (a: number, b: number): number => {
  return a + b;
};

// If the function body is a single expression, braces and 'return' can be omitted
const multiply = (a: number, b: number): number => a * b;

// Arrow function with no parameters
const getRandom = (): number => Math.random();

// Arrow function with one parameter (parentheses optional if no type annotation)
const square = (x: number): number => x * x;

console.log(add(5, 3));      // Output: 8
console.log(multiply(5, 3)); // Output: 15
console.log(square(4));    // Output: 16