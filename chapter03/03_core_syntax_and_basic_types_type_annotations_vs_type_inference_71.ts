// Snippet 71 from Chapter 3
// Section: Core Syntax and Basic Types
// Subsection: Type Annotations vs. Type Inference
// Language: typescript
// Description: let movieTitle = "Inception"; // Inferred as type ...
// 
let movieTitle = "Inception"; // Inferred as type ``string''
let releaseYear = 2010;      // Inferred as type ``number''
let wasSuccessful = true;    // Inferred as type ``boolean''

// movieTitle = 123; // Error: Type ``number'' is not assignable to type ``string''.
// TypeScript inferred ``string'' and enforces it.

function multiply(a: number, b: number) { // Return type inferred as ``number''
    return a * b;
}