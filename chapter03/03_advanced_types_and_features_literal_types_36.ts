// Snippet 36 from Chapter 3
// Section: Advanced Types and Features
// Subsection: Literal Types
// Language: typescript
// Description: type Alignment = "left" | "center" | "right";
// 
// String literal types
type Alignment = "left" | "center" | "right";
let textAlign: Alignment;

textAlign = "center"; // OK
// textAlign = "justify"; // Error: Type '"justify"' is not assignable to type 'Alignment'.

// Number literal types
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
let roll: DiceRoll = 4; // OK
// roll = 7; // Error: Type '7' is not assignable to type 'DiceRoll'.

// Boolean literal types (less common on their own, but possible)
type Confirmation = true;
let mustBeTrue: Confirmation = true; // OK
// mustBeTrue = false; // Error: Type 'false' is not assignable to type 'true'.

// Often used in function return types or object properties
interface Response {
    status: "success" | "error";
    code: 200 | 400 | 404 | 500;
    message?: string;
}

const successResponse: Response = { status: "success", code: 200 };
const notFoundResponse: Response = { status: "error", code: 404, message: "Resource not found"};