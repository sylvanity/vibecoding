// Snippet 18 from Chapter 3
// Section: Control Flow Logic
// Subsection: Looping Constructs
// Language: typescript
// Description: console.log("Counting up:");
// 
console.log("Counting up:");
for (let i: number = 0; i < 5; i++) {
  // i++ runs *after* the block executes
  console.log(i); // Outputs 0, 1, 2, 3, 4
}

let message = "Hello";
console.log("Iterating through string:");
for (let i = 0; i < message.length; i++) {
    console.log(message[i]); // Outputs H, e, l, l, o
}