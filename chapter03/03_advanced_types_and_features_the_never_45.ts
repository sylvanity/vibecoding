// Snippet 45 from Chapter 3
// Section: Advanced Types and Features
// Subsection: The never
// Language: typescript
// Description: type Shape = { kind: "circle"; radius: number } | ...
// 
type Shape = { kind: "circle"; radius: number } | { kind: "square"; sideLength: number };

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        default:
            // If we handled all known kinds, 'shape' should be impossible here.
            // Assigning it to 'never' proves this at compile time.
            const _exhaustiveCheck: never = shape;
            // If a new shape kind (e.g., 'triangle') is added to the 'Shape' union
            // later, but this 'switch' isn't updated, TypeScript will cause a
            // compile error on the line above, because the 'triangle' shape
            // cannot be assigned to 'never'.
            return _exhaustiveCheck; // Or throw an error
    }
}