// Snippet 66 from Chapter 3
// Section: Core Syntax and Basic Types
// Subsection: Primitive Types
// Language: typescript
// Description: let veryLargeNumber: bigint = 9007199254740991n;
// 
let veryLargeNumber: bigint = 9007199254740991n;
let anotherBigInt: bigint = BigInt("12345678901234567890");
// let sum: bigint = veryLargeNumber + 10; // Error: Cannot mix bigint and number types directly
let sum: bigint = veryLargeNumber + 10n; // OK