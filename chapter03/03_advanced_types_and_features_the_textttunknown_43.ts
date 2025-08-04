// Snippet 43 from Chapter 3
// Section: Advanced Types and Features
// Subsection: The \texttt{unknown
// Source: Introduction to Programming with TypeScript/Advanced Types and Features.tex (line 305)
// Language: typescript
// Description: let valueAny: any;
// 
let valueAny: any;
let valueUnknown: unknown;

valueAny = 10;
valueUnknown = "hello";

// Operations on 'any' are allowed but unsafe
console.log(valueAny.toFixed(2)); // No compile error, but might crash if valueAny wasn't a number

// Operations on 'unknown' are disallowed until type is checked
// console.log(valueUnknown.toUpperCase()); // Error: 'valueUnknown' is of type 'unknown'.

// Type checking 'unknown'
if (typeof valueUnknown === 'string') {
  // OK: TypeScript knows valueUnknown is a string in this block
  console.log(valueUnknown.toUpperCase()); // HELLO
}

if (typeof valueAny === 'number') {
    console.log(valueAny.toFixed(2)); // 10.00 (Safer with check)
}