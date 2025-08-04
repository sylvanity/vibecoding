// Snippet 46 from Chapter 3
// Section: Advanced Types and Features
// Subsection: The never
// Language: typescript
// Description: function fail(message: string): never {
// 
// Function that always throws
function fail(message: string): never {
    throw new Error(message);
}

// Function with an infinite loop (less common in typical apps)
function infiniteProcess(): never {
    while (true) {
        // ... do something forever ...
    }
}