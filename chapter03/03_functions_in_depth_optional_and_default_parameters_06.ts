// Snippet 06 from Chapter 3
// Section: Functions In-Depth
// Subsection: Optional and Default Parameters
// Language: typescript
// Description: function createMessage(text: string, sender: strin...
// 
function createMessage(text: string, sender: string = "System"): string {
  return `[${sender}] ${text}`;
}

console.log(createMessage("User logged in."));      // Output: [System] User logged in.
console.log(createMessage("Payment processed.", "API")); // Output: [API] Payment processed.

// Default parameter before required (less common)
function buildUrl(path: string, protocol: string = "https", domain: string): string {
    return `${protocol}://${domain}${path}`;
}
// console.log(buildUrl("/users", "example.com")); // Error: Expected 3 arguments, but got 2.
console.log(buildUrl("/users", undefined, "example.com")); // Output: https://example.com/users