// Snippet 29 from Chapter 5
// Section: Handling Side Effects with \texttt{useEffect
// Subsection: The Cleanup Function
// Source: Building User Interfaces with React/Handling Side Effects with useEffect.tex (line 232)
// Language: typescript
// Description: useEffect(() => {
// 
useEffect(() => {
  const handleResize = () => console.log('Window resized!');
  // Add event listener when component mounts
  window.addEventListener('resize', handleResize);

  // Cleanup function to remove the listener
  return () => {
    window.removeEventListener('resize', handleResize);
    console.log("Resize listener removed");
  };
}, []); // Empty dependency array: add listener on mount, remove on unmount