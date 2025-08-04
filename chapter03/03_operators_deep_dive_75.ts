// Snippet 75 from Chapter 3
// Section: Operators Deep Dive
// Subsection: 
// Language: typescript
// Description: let isAvailable = true;
// 
let isAvailable = true;
let hasPermission = false;

console.log(isAvailable && hasPermission); // false (both must be true)
console.log(isAvailable || hasPermission); // true (at least one is true)
console.log(!isAvailable);                 // false (inverts true)

// Short-circuiting example
let user = null;
// The right side (user.name) is not evaluated because user is null (falsy)
let name = user && user.name;
console.log(name); // Output: null

let defaultValue = "";
let setting = defaultValue || "Default Setting"; // Uses "Default Setting" because defaultValue is falsy
console.log(setting); // Output: Default Setting