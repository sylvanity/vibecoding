// Snippet 39 from Chapter 3
// Section: Advanced Types and Features
// Subsection: Enums
// Language: typescript
// Description: const enum Color {
// 
const enum Color {
  Red = "#FF0000",
  Green = "#00FF00",
  Blue = "#0000FF"
}

let primaryColor: Color = Color.Red;
console.log(primaryColor); // Compiled JS will likely inline "#FF0000" directly
// console.log(Color[0]); // Error: A const enum member can only be accessed using a string literal.
// console.log(Color); // Error: 'Color' only refers to a type, but is being used as a value here.