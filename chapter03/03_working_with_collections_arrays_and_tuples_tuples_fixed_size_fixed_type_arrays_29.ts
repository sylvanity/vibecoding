// Snippet 29 from Chapter 3
// Section: Working with Collections: Arrays and Tuples
// Subsection: Tuples: Fixed-Size, Fixed-Type Arrays
// Language: typescript
// Description: type StringNumberPair = [string, number];
// 
// Define a tuple type representing [string, number]
type StringNumberPair = [string, number];

// Create a tuple matching the type
let userTuple: StringNumberPair = ["Alice", 30];

// Accessing elements (like arrays)
console.log(userTuple[0]); // Output: Alice (TypeScript knows this is a string)
console.log(userTuple[1]); // Output: 30    (TypeScript knows this is a number)

// Type safety is enforced:
// userTuple[0] = 100; // Error: Type 'number' is not assignable to type 'string'.
// userTuple[1] = "Bob"; // Error: Type 'string' is not assignable to type 'number'.

// Length is fixed:
// userTuple[2] = true; // Error: Tuple type 'StringNumberPair' of length '2' has no element at index '2'.
// userTuple.push("Extra"); // Note: push can sometimes bypass strict length checks, use cautiously.

// Example: Representing RGB color
type RGBColor = [number, number, number];
let red: RGBColor = [255, 0, 0];
// let invalidColor: RGBColor = [255, 0]; // Error: Tuple type 'RGBColor' of length '3' has no element at index '2'.

// Tuples with optional elements (less common)
type OptionalTuple = [string, number?];
let opt1: OptionalTuple = ["Hello"];
let opt2: OptionalTuple = ["World", 123];