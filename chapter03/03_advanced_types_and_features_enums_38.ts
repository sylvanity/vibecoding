// Snippet 38 from Chapter 3
// Section: Advanced Types and Features
// Subsection: Enums
// Language: typescript
// Description: enum LogLevel {
// 
enum LogLevel {
  Info = "INFO",
  Warning = "WARN",
  Error = "ERROR",
  Debug = "DEBUG"
}

let level: LogLevel = LogLevel.Warning;
console.log(level); // Output: WARN
// console.log(LogLevel["WARN"]); // No reverse mapping for string enums