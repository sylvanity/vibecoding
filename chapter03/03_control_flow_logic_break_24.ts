// Snippet 24 from Chapter 3
// Section: Control Flow Logic
// Subsection: break
// Language: typescript
// Description: console.log("Using break:");
// 
console.log("Using break:");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Breaking loop at 5");
    break; // Exit the loop entirely
  }
  console.log(i); // Outputs 0, 1, 2, 3, 4
}

console.log("Using continue:");
for (let i = 0; i < 5; i++) {
  if (i % 2 !== 0) { // If i is odd
    continue; // Skip the rest of this iteration
  }
  console.log(`Even number: ${i}`); // Only runs for even numbers
}
// Output:
// Even number: 0
// Even number: 2
// Even number: 4