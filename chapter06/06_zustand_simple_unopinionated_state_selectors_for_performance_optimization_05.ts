// Snippet 05 from Chapter 6
// Section: Zustand: Simple, Unopinionated State
// Subsection: Selectors for Performance Optimization
// Language: typescript
// Description: import { shallow } from 'zustand/shallow'; // Impo...
// 
import { shallow } from 'zustand/shallow'; // Import shallow

function ControlsOptimized(): JSX.Element {
  // Select multiple values, use shallow comparison
  const { increment, decrement, reset } = useCounterStore(
    (state) => ({
      increment: state.increment,
      decrement: state.decrement,
      reset: state.reset,
    }),
    shallow // Use shallow equality check
  );

  // ... render buttons ...
  return (/* ... buttons ... */);
}