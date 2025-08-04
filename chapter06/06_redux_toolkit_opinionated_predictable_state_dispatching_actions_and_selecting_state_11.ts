// Snippet 11 from Chapter 6
// Section: Redux Toolkit: Opinionated, Predictable State
// Subsection: Dispatching Actions and Selecting State
// Language: typescript
// Description: import React from 'react';
// 
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from './app/store'; // Import types
import { increment, decrement, incrementByAmount } from './features/counter/counterSlice'; // Import action creators

function ReduxCounter(): JSX.Element {
  // Select the counter value from the Redux state
  const count = useSelector((state: RootState) => state.counter.value);

  // Get the dispatch function
  const dispatch = useDispatch<AppDispatch>(); // Typed dispatch

  return (
    <div>
      <h2>Redux Counter</h2>
      <p>Count: {count}</p>
      <div>
        {/* Dispatch actions on button clicks */}
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      </div>
    </div>
  );
}

export default ReduxCounter;