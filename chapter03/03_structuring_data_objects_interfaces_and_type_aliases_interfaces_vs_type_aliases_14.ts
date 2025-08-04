// Snippet 14 from Chapter 3
// Section: Structuring Data: Objects, Interfaces, and Type Aliases
// Subsection: Interfaces vs. Type Aliases
// Language: typescript
// Description: interface Box {
// 
interface Box {
  width: number;
  height: number;
}

interface Box { // Re-opening the interface
  color: string;
  // width: string; // Error: Subsequent property declarations must have the same type.
}

const myBox: Box = { width: 10, height: 20, color: "blue" }; // All properties are merged