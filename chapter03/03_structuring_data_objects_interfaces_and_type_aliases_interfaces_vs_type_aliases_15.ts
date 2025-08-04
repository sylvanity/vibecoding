// Snippet 15 from Chapter 3
// Section: Structuring Data: Objects, Interfaces, and Type Aliases
// Subsection: Interfaces vs. Type Aliases
// Language: typescript
// Description: interface Shape { color: string; }
// 
// Interface Extension
interface Shape { color: string; }
interface Square extends Shape { sideLength: number; }

// Type Alias Intersection
type Colorful = { color: string; };
type Circle = Colorful & { radius: number; }; // Use intersection type '&'

const sq: Square = { color: "red", sideLength: 5 };
const ci: Circle = { color: "green", radius: 3 };