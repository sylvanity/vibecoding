// Snippet 08 from Chapter 3
// Section: Functions In-Depth
// Subsection: Function Overloading
// Language: typescript
// Description: function formatData(data: string): string;
// 
// Overload signatures: Define the different ways the function can be called
function formatData(data: string): string;
function formatData(data: number, decimals: number): string;
function formatData(data: boolean): "Yes" | "No";

// Implementation signature (must be compatible with all overloads)
// Often uses broader types like 'any' or union types, requiring type checks inside
function formatData(data: string | number | boolean, decimals?: number): string | "Yes" | "No" {
  if (typeof data === 'string') {
    return data.toUpperCase(); // Implementation for string overload
  } else if (typeof data === 'number') {
    // Implementation for number overload (needs decimals)
    return data.toFixed(decimals ?? 0); // Use nullish coalescing for optional decimals
  } else if (typeof data === 'boolean') {
    return data ? "Yes" : "No"; // Implementation for boolean overload
  } else {
     // Fallback or error handling - implementation signature might need 'never' or error throw
     throw new Error("Invalid data type");
  }
}

// Calling the overloaded function - TypeScript checks against overload signatures
let formattedString = formatData("hello world"); // Matches first overload
let formattedNumber = formatData(123.456, 2);   // Matches second overload
let formattedBoolean = formatData(true);         // Matches third overload

console.log(formattedString); // Output: HELLO WORLD
console.log(formattedNumber); // Output: 123.46
console.log(formattedBoolean); // Output: Yes

// let errorCall = formatData(123); // Error: No overload expects 1 argument of type number without decimals
// let errorCall2 = formatData(true, 1); // Error: No overload matches this call.