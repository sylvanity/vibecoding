// Snippet 61 from Chapter 3
// Section: Core Syntax and Basic Types
// Subsection: Statements, Comments, and Code Blocks
// Language: typescript
// Description: let count = 5;
// 
let count = 5;

if (count > 0) { // Start of code block for the ``if'' statement
  console.log("Count is positive.");
  let message = "Inside block"; // ``message'' is scoped to this block
  console.log(message);
} // End of code block

// console.log(message); // Error: Cannot find name ``message''. It's outside its scope.