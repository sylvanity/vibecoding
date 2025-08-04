// Snippet 78 from Chapter 3
// Section: Operators Deep Dive
// Subsection: 
// Language: typescript
// Description: console.log(typeof "hello"); // "string"
// 
console.log(typeof "hello"); // "string"
console.log(typeof 100);     // "number"
console.log(typeof true);    // "boolean"
console.log(typeof {});      // "object"
console.log(typeof null);    // "object" (quirk!)
console.log(typeof undefined); // "undefined"
console.log(typeof function(){}); // "function"