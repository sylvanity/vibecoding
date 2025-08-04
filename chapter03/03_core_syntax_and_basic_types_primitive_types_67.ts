// Snippet 67 from Chapter 3
// Section: Core Syntax and Basic Types
// Subsection: Primitive Types
// Language: typescript
// Description: let sym1: symbol = Symbol("key");
// 
let sym1: symbol = Symbol("key");
let sym2: symbol = Symbol("key");
// console.log(sym1 === sym2); // Output: false (Symbols are unique)
const uniqueKey = Symbol("userId");
let user = { [uniqueKey]: 123 };
console.log(user[uniqueKey]); // Output: 123