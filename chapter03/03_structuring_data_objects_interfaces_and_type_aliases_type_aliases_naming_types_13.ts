// Snippet 13 from Chapter 3
// Section: Structuring Data: Objects, Interfaces, and Type Aliases
// Subsection: Type Aliases: Naming Types
// Language: typescript
// Description: type UserID = number;
// 
// Alias for a primitive type
type UserID = number;
let userId: UserID = 12345;

// Alias for a union type
type Status = "pending" | "processing" | "completed" | "failed";
let orderStatus: Status = "processing";
// orderStatus = "shipped"; // Error: Type '"shipped"' is not assignable to type 'Status'.

// Alias for an object shape (similar to an interface)
type Point = {
  x: number;
  y: number;
  readonly label?: string; // Can also use optional/readonly modifiers
};

const origin: Point = { x: 0, y: 0, label: "Origin" };
const point1: Point = { x: 10, y: 20 };

// Alias for a function signature
type LogFunction = (message: string, level?: string) => void;

const consoleLogger: LogFunction = (msg, lvl = "info") => {
  console.log(`[${lvl.toUpperCase()}] ${msg}`);
};

consoleLogger("User logged in"); // Output: [INFO] User logged in
consoleLogger("Payment failed", "error"); // Output: [ERROR] Payment failed