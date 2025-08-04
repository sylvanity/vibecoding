// Snippet 50 from Chapter 3
// Section: Modules, Async Programming \& Error Handling
// Subsection: Promises: Managing Asynchronous Results
// Language: typescript
// Description: declare function fetchData(url: string): Promise<s...
// 
// Assume fetchData returns Promise<string> containing JSON
declare function fetchData(url: string): Promise<string>;
// Assume processData returns Promise<ProcessedData>
declare function processData(data: any): Promise<{ success: boolean }>;

console.log("Starting Promise chain...");
fetchData("https://api.example.com/data")
  .then((rawData: string) => { // Step 1: Fetch succeeded
    console.log("1. Received raw data.");
    try {
      // Returning a value: the result of JSON.parse
      // The next .then receives this parsed data.
      return JSON.parse(rawData);
    } catch (parseError) {
      console.error("Parsing failed.");
      // Throwing an error rejects the promise returned by this .then
      throw new Error("Invalid JSON received");
    }
  })
  .then((parsedData: any) => { // Step 2: Parsing succeeded
    console.log("2. Data parsed.");
    // Returning another Promise: processData promise is chained.
    // The next .then waits for processData to settle.
    return processData(parsedData);
  })
  .then((result: { success: boolean }) => { // Step 3: Processing settled
    console.log("3. Processing completed:", result);
    if (!result.success) {
      throw new Error("Processing step failed"); // Manually reject
    }
    return "Chain finished successfully!"; // Fulfill with a final message
  })
  .then((finalMessage: string) => { // Step 4: Handle final success
     console.log(finalMessage);
  })
  .catch((error: any) => { // Catches any rejection in the chain
    console.error("PROMISE CHAIN ERROR:", error.message);
  })
  .finally(() => { // Always executes
    console.log("Promise chain settled (finally).");
  });