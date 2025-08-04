// Snippet 23 from Chapter 5
// Section: Handling Side Effects with \texttt{useEffect
// Subsection: \texttt{useEffect
// Source: Building User Interfaces with React/Handling Side Effects with useEffect.tex (line 44)
// Language: typescript
// Description: import React, { useState, useEffect } from 'react'...
// 
import React, { useState, useEffect } from 'react';

// Assume props type is defined elsewhere or component doesn't use props directly here
// function MyComponent(props: { /* prop types */ }) {
function MyComponent() {
  const [stateValue, setStateValue] = useState(0); // Example state

  useEffect(() => {
    // --- Setup Function ---
    // This code runs after the component renders.
    // Place your side effect logic here (e.g., data fetching, subscriptions).
    console.log("Effect ran!");
    // Example: document.title = `State is ${stateValue}`;

    // Optional: Return a cleanup function
    return () => {
      // --- Cleanup Function ---
      // This code runs before the component unmounts
      // or before the effect runs again.
      console.log("Cleanup ran!");
    };
  }, [stateValue]); // Example: Dependency Array includes stateValue

  return (
    <div>Current state: {stateValue}</div>
  );
}