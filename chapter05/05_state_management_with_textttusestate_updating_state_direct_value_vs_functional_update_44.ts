// Snippet 44 from Chapter 5
// Section: State Management with \texttt{useState
// Subsection: Updating State: Direct Value vs. Functional Update
// Source: Building User Interfaces with React/State Management with `useState`.tex (line 100)
// Language: typescript
// Description: const [count, setCount] = useState(0);
// 
const [count, setCount] = useState(0);

// Correct way to update state based on previous state
const handleIncrementSafely = () => {
  setCount(prevCount => prevCount + 1);
};

// Example of why functional updates are safer:
// If you call setCount(count + 1) multiple times quickly,
// 'count' might not have updated yet, leading to incorrect results.
const handleIncrementMultiple = () => {
    setCount(prev => prev + 1); // Queues an update based on the state at the time of update
    setCount(prev => prev + 1); // Queues another update based on the result of the first
};