// Snippet 20 from Chapter 3
// Section: Control Flow Logic
// Subsection: Looping Constructs
// Language: typescript
// Description: const user = { name: "Alice", age: 30, city: "Wond...
// 
const user = { name: "Alice", age: 30, city: "Wonderland" };

console.log("Iterating over object keys:");
for (const key in user) {
  // Optional: Check if the property belongs to the object itself (not inherited)
  if (Object.prototype.hasOwnProperty.call(user, key)) {
    // To get the value, use bracket notation
    // Need type assertion or check because key is string, value type varies
    const value = user[key as keyof typeof user];
    console.log(`${key}: ${value}`);
  }
}
// Output:
// name: Alice
// age: 30
// city: Wonderland