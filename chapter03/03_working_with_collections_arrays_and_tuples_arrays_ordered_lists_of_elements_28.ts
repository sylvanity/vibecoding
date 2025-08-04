// Snippet 28 from Chapter 3
// Section: Working with Collections: Arrays and Tuples
// Subsection: Arrays: Ordered Lists of Elements
// Language: typescript
// Description: let nums: number[] = [1, 2, 3, 4, 5];
// 
let nums: number[] = [1, 2, 3, 4, 5];
interface User { id: number; name: string; isActive: boolean; }
const users: User[] = [
  { id: 1, name: "Alice", isActive: true },
  { id: 2, name: "Bob", isActive: false },
  { id: 3, name: "Charlie", isActive: true },
];

// --- map ---
// Example 1: Double each number
let doubled: number[] = nums.map(n => n * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Example 2: Get user names
let userNames: string[] = users.map(user => user.name);
console.log(userNames); // Output: ["Alice", "Bob", "Charlie"]

// --- filter ---
// Example 1: Get only even numbers
let evens: number[] = nums.filter(n => n % 2 === 0);
console.log(evens); // Output: [2, 4]

// Example 2: Get only active users
let activeUsers: User[] = users.filter(user => user.isActive);
console.log(activeUsers); // Output: [{ id: 1, name: "Alice", isActive: true }, { id: 3, name: "Charlie", isActive: true }]

// --- reduce ---
// Example 1: Calculate the sum
let sum: number = nums.reduce((accumulator, currentValue) => {
  console.log(`Accumulator: ${accumulator}, CurrentValue: ${currentValue}`);
  return accumulator + currentValue;
}, 0); // initialValue is 0
console.log(sum); // Output: 15

// Example 2: Group users by active status
interface GroupedUsers { active: User[]; inactive: User[]; }
let groupedUsers = users.reduce<GroupedUsers>((acc, user) => {
  if (user.isActive) {
    acc.active.push(user);
  } else {
    acc.inactive.push(user);
  }
  return acc; // Always return the accumulator
}, { active: [], inactive: [] }); // initialValue is an object with empty arrays
console.log(groupedUsers);
// Output: { active: [ { id: 1, ... }, { id: 3, ... } ], inactive: [ { id: 2, ... } ] }

// Example 3: Find the user with the highest ID (alternative to sorting)
let maxIdUser = users.reduce((maxUser, currentUser) => {
    return currentUser.id > maxUser.id ? currentUser : maxUser;
}, users[0]); // Use first user as initial value (careful with empty arrays!)
console.log(maxIdUser); // Output: { id: 3, name: "Charlie", isActive: true }