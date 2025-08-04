// Snippet 10 from Chapter 8
// Section: Unit Testing
// Subsection: Testing React Components with React Testing Library (RTL)
// Language: typescript
// Description: import React, { useState } from 'react';
// 
import React, { useState } from 'react';

function SimpleCounter(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Simple Counter</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <button onClick={() => setCount(c => c - 1)} disabled={count <= 0}>
        Decrement
      </button>
    </div>
  );
}

export default SimpleCounter;