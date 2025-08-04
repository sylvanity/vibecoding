// Snippet 62 from Chapter 3
// Section: Core Syntax and Basic Types
// Subsection: Variables (\texttt{let
// Source: Introduction to Programming with TypeScript/Core Syntax and Basic Types.tex (line 73)
// Language: typescript
// Description: let userAge: number = 30;
// 
// Using let - value can change
let userAge: number = 30;
console.log(userAge); // Output: 30
userAge = 31; // OK: Reassigning the value
console.log(userAge); // Output: 31

// Using const - value cannot be reassigned
const birthYear: number = 1994;
console.log(birthYear); // Output: 1994
// birthYear = 1995; // Error: Cannot assign to ``birthYear'' because it is a constant.

// Const with objects - variable binding is constant, but object content can change
const userProfile = { name: "Alice", city: "Wonderland" };
console.log(userProfile.name); // Output: Alice

userProfile.city = "Looking Glass"; // OK: Modifying a property of the constant object
console.log(userProfile.city); // Output: Looking Glass

// userProfile = { name: "Bob", city: "Builder" }; // Error: Cannot assign to ``userProfile''