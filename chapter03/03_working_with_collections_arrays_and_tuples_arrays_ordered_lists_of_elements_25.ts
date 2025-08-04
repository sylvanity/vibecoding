// Snippet 25 from Chapter 3
// Section: Working with Collections: Arrays and Tuples
// Subsection: Arrays: Ordered Lists of Elements
// Language: typescript
// Description: let numbers: number[] = [1, 2, 3, 4, 5];
// 
// Using Type[] syntax (common)
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
let flags: boolean[] = [true, false, true];
let mixedButTyped: (string | number)[] = ["Hello", 42, "World"]; // Array of strings or numbers

// Using Array<Type> syntax (generic)
let scores: Array<number> = [100, 95, 88];
let words: Array<string> = ["typescript", "is", "fun"];

// Declaring an empty array (explicit type annotation is needed)
let emptyNumbers: number[] = [];
let emptyStrings: Array<string> = [];

// TypeScript enforces the type:
// names.push(123); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.