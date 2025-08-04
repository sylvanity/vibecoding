// Snippet 83 from Chapter 3
// Section: TypeScript Fundamentals
// Subsection: Static vs. Dynamic Typing
// Language: js
// Description: let message = "Hello"; // message is a string
// 
let message = "Hello"; // message is a string
console.log(message.toUpperCase()); // Works fine

message = 100; // Now message is a number - no error yet!
console.log(message.toUpperCase()); // CRASH! Runtime Error: message.toUpperCase is not a function