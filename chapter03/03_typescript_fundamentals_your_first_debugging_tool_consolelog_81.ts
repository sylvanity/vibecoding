// Snippet 81 from Chapter 3
// Section: TypeScript Fundamentals
// Subsection: Your First Debugging Tool: console.log
// Language: typescript
// Description: let city: string = "Delft";
// 
let city: string = "Delft";
let temperature: number = 15.5;
const country: string = "Netherlands";

// Using template literals with ${...}
console.log(`Location: ${city}, ${country}. Current temperature: ${temperature}°C.`);
// Output: Location: Delft, Netherlands. Current temperature: 15.5°C.

// You can embed any valid expression
console.log(`Temperature in Fahrenheit: ${temperature * 1.8 + 32}`);
// Output: Temperature in Fahrenheit: 59.9