// Snippet 42 from Chapter 5
// Section: State Management with \texttt{useState
// Subsection: \texttt{useState
// Source: Building User Interfaces with React/State Management with `useState`.tex (line 44)
// Language: typescript
// Description: import React, { useState } from 'react'; // Import...
// 
import React, { useState } from 'react'; // Import useState from React

function Counter(): JSX.Element {
  // Declare a state variable 'count' initialized to 0
  // 'setCount' is the function to update 'count'
  const [count, setCount] = useState(0); // Initial state is 0

  // Event handler to increment the count
  const handleIncrement = () => {
    setCount(count + 1); // Update the state using the setter function
  };

  // Event handler to decrement the count
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Current Count: {count}</p> {/* Display the current state */}
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;