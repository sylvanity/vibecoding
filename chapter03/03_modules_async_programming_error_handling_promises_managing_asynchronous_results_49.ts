// Snippet 49 from Chapter 3
// Section: Modules, Async Programming \& Error Handling
// Subsection: Promises: Managing Asynchronous Results
// Language: typescript
// Description: function wait(duration: number): Promise<string> {
// 
function wait(duration: number): Promise<string> {
  // Create a new Promise
  return new Promise((resolve, reject) => {
    if (duration < 0) {
      // Reject immediately for invalid input
      reject(new Error("Duration cannot be negative"));
    } else {
      // Perform the async operation (setTimeout)
      setTimeout(() => {
        // Resolve the promise after the duration
        resolve(`Waited for ${duration}ms`);
      }, duration);
    }
  });
}

// Example usage of our Promise-creating function:
wait(1000)
  .then(message => console.log("Success:", message)) // Success: Waited for 1000ms
  .catch(error => console.error("Failure:", error.message));

wait(-500)
  .then(message => console.log("Success:", message))
  .catch(error => console.error("Failure:", error.message)); // Failure: Duration cannot be negative