// Snippet 24 from Chapter 5
// Section: Handling Side Effects with \texttt{useEffect
// Subsection: Dependency Array Behavior Explained
// Source: Building User Interfaces with React/Handling Side Effects with useEffect.tex (line 83)
// Language: typescript
// Description: useEffect(() => {
// 
useEffect(() => {
  console.log('Component rendered or updated');
  // Runs on mount AND every update
});