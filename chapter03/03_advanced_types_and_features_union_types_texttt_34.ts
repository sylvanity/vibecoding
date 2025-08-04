// Snippet 34 from Chapter 3
// Section: Advanced Types and Features
// Subsection: Union Types (\texttt{|
// Source: Introduction to Programming with TypeScript/Advanced Types and Features.tex (line 23)
// Language: typescript
// Description: let identifier: string | number;
// 
// Variable can hold a string or a number
let identifier: string | number;

identifier = "user-123"; // OK
console.log(identifier.toUpperCase()); // OK (TypeScript knows it might be string)

identifier = 456; // OK
// console.log(identifier.toUpperCase()); // Error: Property 'toUpperCase' does not exist on type 'number'.

// Function parameter accepting string or string array
function logItems(items: string | string[]): void {
  if (typeof items === 'string') {
    console.log(`Single item: ${items}`);
  } else { // TypeScript knows 'items' must be string[] here
    console.log("Multiple items:");
    items.forEach(item => console.log(`- ${item}`));
  }
}

logItems("Apple");
logItems(["Banana", "Cherry"]);

// Type alias for a union
type Result = { success: true; data: any } | { success: false; error: string };

function handleResult(result: Result): void {
    if (result.success) { // Type narrowing based on 'success' property
        console.log("Data:", result.data);
    } else {
        console.error("Error:", result.error);
    }
}