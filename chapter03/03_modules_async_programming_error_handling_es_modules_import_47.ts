// Snippet 47 from Chapter 3
// Section: Modules, Async Programming \& Error Handling
// Subsection: ES Modules (import)
// Language: typescript
// Description: export const PI = 3.14159;
// 
// mathUtils.ts

// Named exports
export const PI = 3.14159;

export function add(a: number, b: number): number {
    return a + b;
}

// Default export
export default function multiply(a: number, b: number): number {
    return a * b;
}