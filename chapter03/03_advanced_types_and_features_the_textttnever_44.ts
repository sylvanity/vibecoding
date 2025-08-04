// Snippet 44 from Chapter 3
// Section: Advanced Types and Features
// Subsection: The \texttt{never
// Source: Introduction to Programming with TypeScript/Advanced Types and Features.tex (line 354)
// Language: typescript
// Description: function throwError(message: string): never {
// 
// Function that always throws an error
function throwError(message: string): never {
  throw new Error(message);
  // Code after 'throw' is unreachable
}

// Function with an infinite loop
function infiniteLoop(): never {
  while (true) {
    // ...
  }
}

// Used in type narrowing for exhaustive checks
type Shape = { kind: "circle"; radius: number } | { kind: "square"; sideLength: number };

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        default:
            // 'exhaustiveCheck' will have type 'never' if all cases are handled
            const exhaustiveCheck: never = shape;
            // If a new shape kind was added without updating the switch,
            // assigning 'shape' to 'never' would cause a compile error here.
            return exhaustiveCheck;
    }
}