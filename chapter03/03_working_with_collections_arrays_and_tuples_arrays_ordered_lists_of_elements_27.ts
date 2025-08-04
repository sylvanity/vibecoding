// Snippet 27 from Chapter 3
// Section: Working with Collections: Arrays and Tuples
// Subsection: Arrays: Ordered Lists of Elements
// Language: typescript
// Description: let letters: string[] = ["a", "b", "c"];
// 
let letters: string[] = ["a", "b", "c"];

// push
let newLength = letters.push("d", "e");
console.log(letters);    // Output: ["a", "b", "c", "d", "e"]
console.log(newLength); // Output: 5

// pop
let lastElement = letters.pop();
console.log(letters);       // Output: ["a", "b", "c", "d"]
console.log(lastElement); // Output: e

// slice (does not modify original)
let middleLetters = letters.slice(1, 3); // Elements at index 1 and 2
console.log(middleLetters); // Output: ["b", "c"]
console.log(letters);        // Output: ["a", "b", "c", "d"] (unchanged by slice)

// splice (modifies original)
// Remove 1 element starting at index 1, and insert "X", "Y"
let removed = letters.splice(1, 1, "X", "Y");
console.log(letters); // Output: ["a", "X", "Y", "c", "d"]
console.log(removed); // Output: ["b"] (the removed element)