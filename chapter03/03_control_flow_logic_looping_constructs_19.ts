// Snippet 19 from Chapter 3
// Section: Control Flow Logic
// Subsection: Looping Constructs
// Language: typescript
// Description: let colors: string[] = ["red", "green", "blue"];
// 
let colors: string[] = ["red", "green", "blue"];

console.log("Iterating over array values:");
for (const color of colors) {
  console.log(color.toUpperCase()); // Outputs RED, GREEN, BLUE
}

let text = "abc";
console.log("Iterating over string characters:");
for (const char of text) {
    console.log(char); // Outputs a, b, c
}