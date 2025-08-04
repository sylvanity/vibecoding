// Snippet 70 from Chapter 3
// Section: Core Syntax and Basic Types
// Subsection: Type Annotations vs. Type Inference
// Language: typescript
// Description: let bookTitle: string = "The Hobbit";
// 
let bookTitle: string = "The Hobbit";
let pageCount: number = 310;
let isFiction: boolean = true;

function greet(name: string): void { // Parameter ``name'' is string, return type is void
  console.log(`Hello, ${name}!`);
}

function add(a: number, b: number): number { // Parameters and return type are number
  return a + b;
}