// Snippet 40 from Chapter 3
// Section: Advanced Types and Features
// Subsection: Generics (<T>)
// Language: typescript
// Description: function getFirstElement<T>(arr: T[]): T | undefin...
// 
// A function that returns the first element of an array of any type 'T'
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}

// Usage with different types:
let firstNumber = getFirstElement<number>([10, 20, 30]); // Explicitly specify T as number
let firstString = getFirstElement(["a", "b", "c"]); // TypeScript infers T as string
let firstBool = getFirstElement<boolean>([]); // Explicitly specify T as boolean

console.log(firstNumber); // Output: 10
console.log(firstString); // Output: a
console.log(firstBool);   // Output: undefined