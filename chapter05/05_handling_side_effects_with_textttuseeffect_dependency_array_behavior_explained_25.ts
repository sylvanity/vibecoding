// Snippet 25 from Chapter 5
// Section: Handling Side Effects with \texttt{useEffect
// Subsection: Dependency Array Behavior Explained
// Source: Building User Interfaces with React/Handling Side Effects with useEffect.tex (line 94)
// Language: typescript
// Description: useEffect(() => {
// 
useEffect(() => {
  console.log('Component mounted');
  // Fetch initial data, set up subscriptions...
  // Runs only ONCE after initial render

  return () => {
    console.log('Component unmounting');
    // Clean up subscriptions, timers...
  };
}, []); // Empty array means run only on mount/unmount