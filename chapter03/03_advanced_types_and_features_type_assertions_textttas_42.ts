// Snippet 42 from Chapter 3
// Section: Advanced Types and Features
// Subsection: Type Assertions (\texttt{as
// Source: Introduction to Programming with TypeScript/Advanced Types and Features.tex (line 272)
// Language: typescript
// Description: let someValue: any = "this is a string";
// 
let someValue: any = "this is a string";

// Using 'as' syntax
let strLength1: number = (someValue as string).length;

// Using angle-bracket syntax
let strLength2: number = (<string>someValue).length;

console.log(strLength1); // Output: 16
console.log(strLength2); // Output: 16

// Example: Accessing a specific DOM element
// Assume 'myCanvas' could be HTMLElement or null
declare const myCanvas: HTMLElement | null;
if (myCanvas) {
    // We know it's specifically an HTMLCanvasElement
    const canvas = myCanvas as HTMLCanvasElement;
    const ctx = canvas.getContext('2d'); // OK, getContext exists on HTMLCanvasElement
}