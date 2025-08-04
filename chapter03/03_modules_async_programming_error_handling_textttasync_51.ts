// Snippet 51 from Chapter 3
// Section: Modules, Async Programming \& Error Handling
// Subsection: \texttt{async
// Source: Introduction to Programming with TypeScript/Modules, Async Programming & Error Handling.tex (line 259)
// Language: typescript
// Description: declare function fetchData(url: string): Promise<s...
// 
declare function fetchData(url: string): Promise<string>; // Same function as before

async function processData(url: string): Promise<void> { // Function now marked async
  console.log("Fetching data with async/await...");
  try {
    const data = await fetchData(url); // Pause until fetchData promise resolves
    console.log("Data received:", data);

    const parsedData = await JSON.parse(data); // Can await non-Promise values too (wraps them)
                                               // Or await another promise if parse was async
    console.log("Parsed data:", parsedData);

  } catch (error) { // Catches rejections from awaited Promises or sync errors
    console.error("Error processing data:", error);
  } finally {
    console.log("Data processing finished.");
  }
}

processData("https://api.example.com/data"); // Call the async function