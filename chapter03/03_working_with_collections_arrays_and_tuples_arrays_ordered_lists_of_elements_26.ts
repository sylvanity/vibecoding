// Snippet 26 from Chapter 3
// Section: Working with Collections: Arrays and Tuples
// Subsection: Arrays: Ordered Lists of Elements
// Language: typescript
// Description: let fruits: string[] = ["Apple", "Banana", "Cherry...
// 
let fruits: string[] = ["Apple", "Banana", "Cherry"];

// Accessing elements (zero-based index)
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Cherry
console.log(fruits[3]); // Output: undefined (index out of bounds)

// Getting the length
console.log(fruits.length); // Output: 3

// Modifying an element
fruits[1] = "Blueberry";
console.log(fruits); // Output: ["Apple", "Blueberry", "Cherry"]

// Accessing the last element
console.log(fruits[fruits.length - 1]); // Output: Cherry