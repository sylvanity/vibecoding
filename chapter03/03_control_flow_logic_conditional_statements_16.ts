// Snippet 16 from Chapter 3
// Section: Control Flow Logic
// Subsection: Conditional Statements
// Language: typescript
// Description: let temperature: number = 25;
// 
let temperature: number = 25;

if (temperature > 30) {
  console.log("It's hot outside!");
} else if (temperature > 20) { // Checked only if the first 'if' was false
  console.log("It's warm and pleasant.");
} else if (temperature > 10) { // Checked only if the first two were false
  console.log("It's a bit cool.");
} else { // Executes if none of the above conditions were true
  console.log("It's cold!");
}
// Output: It's warm and pleasant.