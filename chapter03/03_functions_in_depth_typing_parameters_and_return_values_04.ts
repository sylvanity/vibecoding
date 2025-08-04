// Snippet 04 from Chapter 3
// Section: Functions In-Depth
// Subsection: Typing Parameters and Return Values
// Language: typescript
// Description: function calculateArea(width: number, height: numb...
// 
// Function expects two numbers and returns a number
function calculateArea(width: number, height: number): number {
  return width * height;
}

// Function expects a string array and returns nothing (void)
function printNames(names: string[]): void {
  console.log("Names:");
  names.forEach(name => console.log(`- ${name}`));
  // No explicit 'return' statement needed for void
}

// Function expects a User object (using an interface) and returns a boolean
interface User { id: number; name: string; }
function isUserAdmin(user: User): boolean {
  // Assume some logic here...
  return user.id === 1; // Example logic
}

let area = calculateArea(10, 5); // OK
// let wrongArea = calculateArea("10", 5); // Error: Argument of type 'string' is not assignable...

printNames(["Alice", "Bob"]); // OK

const adminUser: User = { id: 1, name: "Admin" };
const regularUser: User = { id: 2, name: "User" };
console.log(isUserAdmin(adminUser));   // Output: true
console.log(isUserAdmin(regularUser)); // Output: false