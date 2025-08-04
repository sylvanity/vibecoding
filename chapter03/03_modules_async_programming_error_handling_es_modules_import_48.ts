// Snippet 48 from Chapter 3
// Section: Modules, Async Programming \& Error Handling
// Subsection: ES Modules (import)
// Language: typescript
// Description: import { PI, add } from './mathUtils';
// 
// main.ts

// Import named exports (names must match, use curly braces)
import { PI, add } from './mathUtils';

// Import default export (can use any name, no curly braces)
import multiplyNumbers from './mathUtils';
// You could also write: import whateverName from './mathUtils';

console.log(PI);        // Output: 3.14159
console.log(add(2, 3)); // Output: 5
console.log(multiplyNumbers(4, 5)); // Output: 20

// Import everything as a namespace
import * as MathUtils from './mathUtils';
console.log(MathUtils.PI);       // Output: 3.14159
console.log(MathUtils.add(1, 1)); // Output: 2
console.log(MathUtils.default(3, 3)); // Access default via 'default' property -> 9