// Snippet 69 from Chapter 3
// Section: Core Syntax and Basic Types
// Subsection: Primitive Types
// Language: typescript
// Description: let address: string | undefined; // Value is curre...
// 
let address: string | undefined; // Value is currently undefined
console.log(address); // Output: undefined
if (address === undefined) {
  console.log("Address is not set.");
}
function printValue(val?: number) { // Optional parameter defaults to undefined
    console.log(val);
}
printValue(); // Output: undefined