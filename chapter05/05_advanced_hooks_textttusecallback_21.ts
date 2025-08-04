// Snippet 21 from Chapter 5
// Section: Advanced Hooks
// Subsection: \texttt{useCallback
// Source: Building User Interfaces with React/Advanced Hooks: `useContext`, `useReducer`, `useRef`, `useCallback`, `useMemo`.tex (line 267)
// Language: typescript
// Description: import React, { useState, useCallback } from 'reac...
// 
import React, { useState, useCallback } from 'react';

// Assume ChildComponent is memoized (e.g., using React.memo)
declare const ChildComponent: React.MemoExoticComponent<(props: { onClick: () => void }) => JSX.Element>;

function CallbackDemo(): JSX.Element {
  const [count, setCount] = useState(0);

  // Memoize the handleClick function. It will only be recreated if 'count' changes
  // (which it doesn't in this specific handler, so it's stable).
  // If the handler depended on 'count', it *should* be in the deps array.
  const handleClick = useCallback(() => {
    console.log('Button clicked!');
    // If we used 'count' here, it should be in the dependency array:
    // console.log(`Count was ${count}`); -> add [count] to deps
  }, []); // Empty dependency array: function instance is stable

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      {/* Pass the memoized callback to the child */}
      <ChildComponent onClick={handleClick} />
    </div>
  );
}