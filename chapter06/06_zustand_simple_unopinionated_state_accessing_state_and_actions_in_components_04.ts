// Snippet 04 from Chapter 6
// Section: Zustand: Simple, Unopinionated State
// Subsection: Accessing State and Actions in Components
// Language: typescript
// Description: import React from 'react';
// 
import React from 'react';
import useCounterStore from './useCounterStore'; // Import the store hook

function CounterDisplay(): JSX.Element {
  // Select only the 'count' state. Re-renders only when 'count' changes.
  const count = useCounterStore((state) => state.count);

  return <p>Current Count: {count}</p>;
}

function CounterControls(): JSX.Element {
  // Select multiple actions. This component won't re-render if only 'count' changes.
  // Note: Using shallow comparison for objects/arrays if needed (see next section)
  const { increment, decrement, reset } = useCounterStore((state) => ({
    increment: state.increment,
    decrement: state.decrement,
    reset: state.reset,
  }));
  // Or select individually if preferred:
  // const increment = useCounterStore((state) => state.increment);
  // const decrement = useCounterStore((state) => state.decrement);
  // const reset = useCounterStore((state) => state.reset);

  return (
    <div>
      <button onClick={() => increment(5)}>+5</button>
      <button onClick={() => increment()}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );


function App(): JSX.Element {
    return (
        <div>
            <h1>Zustand Counter</h1>
            <CounterDisplay />
            <CounterControls />
        </div>
    );
}

export default App;