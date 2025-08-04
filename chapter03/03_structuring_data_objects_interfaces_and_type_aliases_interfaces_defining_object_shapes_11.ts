// Snippet 11 from Chapter 3
// Section: Structuring Data: Objects, Interfaces, and Type Aliases
// Subsection: Interfaces: Defining Object Shapes
// Language: typescript
// Description: interface User {
// 
// Define the shape of a User object
interface User {
  id: number;
  username: string;
  email: string;
  isAdmin: boolean;
  registrationDate: Date;
}

// Create an object that conforms to the User interface
const user1: User = {
  id: 101,
  username: "sylvia_b",
  email: "sylvia@example.com",
  isAdmin: true,
  registrationDate: new Date("2024-01-15")
};

// TypeScript checks for correctness:
console.log(user1.username); // OK

// const user2: User = { id: 102, username: "guest" };
// Error: Property 'email' is missing in type '{ id: number; username: string; }' but required in type 'User'.
// Error: Property 'isAdmin' is missing...
// Error: Property 'registrationDate' is missing...

// const user3: User = { ...user1, extraProp: "some value" };
// Error: Object literal may only specify known properties, and 'extraProp' does not exist in type 'User'.