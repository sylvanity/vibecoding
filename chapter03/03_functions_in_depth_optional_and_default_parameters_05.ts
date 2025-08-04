// Snippet 05 from Chapter 3
// Section: Functions In-Depth
// Subsection: Optional and Default Parameters
// Language: typescript
// Description: function greetUser(name: string, title?: string): ...
// 
function greetUser(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

console.log(greetUser("Alice"));        // Output: Hello, Alice!
console.log(greetUser("Bob", "Dr.")); // Output: Hello, Dr. Bob!