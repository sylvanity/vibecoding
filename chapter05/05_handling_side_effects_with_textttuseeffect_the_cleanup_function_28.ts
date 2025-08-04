// Snippet 28 from Chapter 5
// Section: Handling Side Effects with \texttt{useEffect
// Subsection: The Cleanup Function
// Source: Building User Interfaces with React/Handling Side Effects with useEffect.tex (line 215)
// Language: typescript
// Description: useEffect(() => {
// 
useEffect(() => {
  const timerId = setTimeout(() => {
    console.log("Timer fired!");
  }, 5000);

  // Cleanup function to clear the timer
  return () => {
    clearTimeout(timerId);
    console.log("Timer cleared");
  };
}, []); // Empty dependency array: run timer once on mount, clear on unmount