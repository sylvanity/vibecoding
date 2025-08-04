// Snippet 37 from Chapter 3
// Section: Advanced Types and Features
// Subsection: Enums
// Language: typescript
// Description: enum Direction {
// 
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  NotFound = 404,
  InternalServerError = 500
}

let move: Direction = Direction.Up;
let responseCode: StatusCodes = StatusCodes.OK;

console.log(move); // Output: 0
console.log(responseCode); // Output: 200
console.log(Direction[0]); // Output: Up (Reverse mapping for numeric enums)