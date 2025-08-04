// Snippet 07 from Chapter 3
// Section: Functions In-Depth
// Subsection: Rest Parameters (\texttt{...args
// Source: Introduction to Programming with TypeScript/Functions In-Depth.tex (line 193)
// Language: typescript
// Description: function sumAll(...numbers: number[]): number {
// 
// Function that sums an arbitrary number of arguments
function sumAll(...numbers: number[]): number {
  return numbers.reduce((total, current) => total + current, 0);
}

console.log(sumAll(1, 2, 3));       // Output: 6
console.log(sumAll(10, 20, 30, 40)); // Output: 100
console.log(sumAll());              // Output: 0

// Function that logs messages with a prefix
function logMessages(prefix: string, ...messages: string[]): void {
  messages.forEach(msg => console.log(`${prefix} ${msg}`));
}

logMessages("[INFO]", "Process started.", "Loading data...", "Complete.");
// Output:
// [INFO] Process started.
// [INFO] Loading data...
// [INFO] Complete.