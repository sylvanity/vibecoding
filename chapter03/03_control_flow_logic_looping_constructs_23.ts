// Snippet 23 from Chapter 3
// Section: Control Flow Logic
// Subsection: Looping Constructs
// Language: typescript
// Description: let attempts: number = 0;
// 
let attempts: number = 0;
console.log("Do...while loop:");
do {
  console.log(`Attempt #${attempts + 1}`);
  // Simulate an action that might eventually succeed
  attempts++;
} while (attempts < 1); // Condition checked after first iteration
// Output:
// Attempt #1