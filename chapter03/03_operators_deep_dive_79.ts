// Snippet 79 from Chapter 3
// Section: Operators Deep Dive
// Subsection: 
// Language: typescript
// Description: class Car {}
// 
class Car {}
let myCar = new Car();
let myDate = new Date();

console.log(myCar instanceof Car);   // true
console.log(myDate instanceof Date); // true
console.log(myDate instanceof Car);  // false
console.log([] instanceof Array);    // true