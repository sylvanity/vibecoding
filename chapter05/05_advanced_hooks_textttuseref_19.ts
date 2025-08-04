// Snippet 19 from Chapter 5
// Section: Advanced Hooks
// Subsection: \texttt{useRef
// Source: Building User Interfaces with React/Advanced Hooks: `useContext`, `useReducer`, `useRef`, `useCallback`, `useMemo`.tex (line 180)
// Language: typescript
// Description: import React, { useRef, useEffect, useState } from...
// 
import React, { useRef, useEffect, useState } from 'react';

function RefDemo(): JSX.Element {
  // 1. Ref for DOM access
  const inputRef = useRef<HTMLInputElement>(null); // Typed ref for input element

  // 2. Ref for storing a mutable value (timer ID)
  const timerIdRef = useRef<number | null>(null);
  const [elapsed, setElapsed] = useState(0);

  // Focus the input on mount
  useEffect(() => {
    // 'current' might be null initially, so check
    inputRef.current?.focus();
  }, []);

  // Start/Stop timer
  const handleStart = () => {
    if (timerIdRef.current === null) { // Check if timer is already running
      timerIdRef.current = window.setInterval(() => {
        setElapsed(prev => prev + 1);
      }, 1000);
      console.log('Timer started, ID:', timerIdRef.current);
    }
  };

  const handleStop = () => {
    if (timerIdRef.current !== null) {
      window.clearInterval(timerIdRef.current);
      console.log('Timer stopped, ID:', timerIdRef.current);
      timerIdRef.current = null; // Reset the ref's current value
    }
  };

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timerIdRef.current !== null) {
        window.clearInterval(timerIdRef.current); // Cleanup using the ref
      }
    };
  }, []); // Empty dependency array for mount/unmount cleanup

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="I will be focused" />
      <hr />
      <p>Elapsed Time: {elapsed}s</p>
      <button onClick={handleStart}>Start Timer</button>
      <button onClick={handleStop}>Stop Timer</button>
    </div>
  );
}
export default RefDemo;