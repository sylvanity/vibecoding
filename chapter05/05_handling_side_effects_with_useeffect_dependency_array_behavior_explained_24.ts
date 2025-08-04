// Snippet 24 from Chapter 5
// Section: Handling Side Effects with useEffect
// Subsection: Dependency Array Behavior Explained
// Language: typescript
// Description: useEffect(() => {
// 
useEffect(() => {
  console.log('Component rendered or updated');
  // Runs on mount AND every update
});