// Snippet 52 from Chapter 3
// Section: Modules, Async Programming \& Error Handling
// Subsection: Error Handling (\texttt{try...catch...finally
// Source: Introduction to Programming with TypeScript/Modules, Async Programming & Error Handling.tex (line 298)
// Language: typescript
// Description: function riskyOperation(value: number): number {
// 
function riskyOperation(value: number): number {
    if (value === 0) {
        throw new Error("Division by zero is not allowed!");
    }
    return 100 / value;
}

try {
    console.log("Attempting risky operation...");
    let result1 = riskyOperation(10); // No error
    console.log("Result 1:", result1); // Output: Result 1: 10

    let result2 = riskyOperation(0); // Throws an error
    console.log("Result 2:", result2); // This line is skipped

} catch (error: unknown) { // Catch the error (use 'unknown' or 'any')
    console.error("Caught an error!");
    if (error instanceof Error) {
        console.error("Error message:", error.message); // Output: Error message: Division by zero...
    } else {
        console.error("Caught an unknown error:", error);
    }
} finally {
    // This block always executes
    console.log("Cleanup: Operation attempt finished.");
}