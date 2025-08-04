// Snippet 33 from Chapter 3
// Section: Understanding the Document Object Model (DOM)
// Subsection: Why Understand the DOM Before React?
// Language: typescript
// Description: import React, { useState } from 'react';
// 
// Declarative approach - describe UI based on state
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <div id="counter-display-1">{count}</div>
      <div id="counter-display-2">{count}</div>
      <div id="counter-display-3">{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button 
        onClick={() => setCount(count - 1)}
        disabled={count <= 0}
      >
        Decrement
      </button>
    </div>
  );
}