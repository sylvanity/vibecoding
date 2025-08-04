// Snippet 18 from Chapter 5
// Section: Advanced Hooks
// Subsection: \texttt{useReducer
// Source: Building User Interfaces with React/Advanced Hooks: `useContext`, `useReducer`, `useRef`, `useCallback`, `useMemo`.tex (line 111)
// Language: typescript
// Description: import React, { useReducer } from 'react';
// 
import React, { useReducer } from 'react';

// Define state shape
interface CounterState {
  count: number;
}

// Define possible actions using a discriminated union (good practice)
type CounterAction =
  | { type: 'INCREMENT'; payload?: number } // Optional payload
  | { type: 'DECREMENT'; payload?: number }
  | { type: 'RESET' };

// Initial state
const initialState: CounterState = { count: 0 };

// Reducer function: takes current state and action, returns new state
function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + (action.payload ?? 1) };
    case 'DECREMENT':
      return { count: state.count - (action.payload ?? 1) };
    case 'RESET':
      return initialState;
    default:
      // For exhaustive checks with discriminated unions
      const exhaustiveCheck: never = action;
      return state; // Or throw error
  }
}

function ReducerCounter(): JSX.Element {
  // Initialize useReducer
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      {/* Dispatch actions instead of calling setState directly */}
      <button onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}>+5</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
}

export default ReducerCounter;