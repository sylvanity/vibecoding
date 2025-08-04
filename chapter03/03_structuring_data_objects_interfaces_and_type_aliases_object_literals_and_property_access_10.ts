// Snippet 10 from Chapter 3
// Section: Structuring Data: Objects, Interfaces, and Type Aliases
// Subsection: Object Literals and Property Access
// Language: typescript
// Description: const book = {
// 
// Type inferred by TypeScript: { title: string; author: string; year: number }
const book = {
  title: "Dune",
  author: "Frank Herbert",
  year: 1965
};

// Accessing properties using dot notation (preferred when key is a valid identifier)
console.log(book.title); // Output: Dune
console.log(book.year);  // Output: 1965

// Accessing properties using bracket notation (required for keys with special characters or dynamic keys)
let propertyName = 'author';
console.log(book[propertyName]); // Output: Frank Herbert
console.log(book['author']);     // Output: Frank Herbert

// Adding a new property (possible in plain JS, but TypeScript might complain if a shape was defined)
// book.genre = "Science Fiction"; // In TS, this might cause an error if 'book' has a strict type

// Modifying an existing property
book.year = 1966; // Assuming 'year' is not readonly
console.log(book.year); // Output: 1966