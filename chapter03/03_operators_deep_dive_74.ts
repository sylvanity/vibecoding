// Snippet 74 from Chapter 3
// Section: Operators Deep Dive
// Subsection: 
// Language: typescript
// Description: console.log(5 == "5");  // true (Loose equality pe...
// 
console.log(5 == "5");  // true (Loose equality performs type coercion)
console.log(5 === "5"); // false (Strict equality checks type and value)
console.log(5 !== "5"); // true (Strict inequality)

console.log(10 > 5);    // true
console.log(10 <= 10);  // true