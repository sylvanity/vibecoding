// Snippet 43 from Chapter 5
// Section: State Management with useState
// Subsection: Updating State: Direct Value vs. Functional Update
// Language: typescript
// Description: const [name, setName] = useState("Alice");
// 
const [name, setName] = useState("Alice");
// ... later in an event handler ...
setName("Bob"); // Directly set the new name