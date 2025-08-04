// Snippet 17 from Chapter 3
// Section: Control Flow Logic
// Subsection: Conditional Statements
// Language: typescript
// Description: type UserRole = "admin" | "editor" | "viewer";
// 
type UserRole = "admin" | "editor" | "viewer";
let role: UserRole = "editor";
let permissions: string;

switch (role) {
  case "admin":
    permissions = "Full access";
    break; // Exit the switch statement
  case "editor":
    permissions = "Can write content";
    break; // Exit the switch statement
  case "viewer":
    permissions = "Read-only access";
    break; // Exit the switch statement
  default:
    // Optional: handle unexpected roles
    console.log(`Unknown role: ${role}`);
    permissions = "No access";
    break;
}

console.log(`Permissions: ${permissions}`); // Output: Permissions: Can write content