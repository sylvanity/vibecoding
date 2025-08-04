// Snippet 03 from Chapter 6
// Section: Zustand: Simple, Unopinionated State
// Subsection: Creating Stores with TypeScript
// Language: typescript
// Description: import { create } from 'zustand'; // Correct impor...
// 
import { create } from 'zustand'; // Correct import

// 1. Define the interface for the store's state and actions
interface CounterState {
  count: number;
  increment: (by?: number) => void;
  decrement: () => void;
  reset: () => void;
}

// 2. Create the store using the 'create' function
const useCounterStore = create<CounterState>((set) => ({
  // Initial state
  count: 0,

  // Actions (functions that modify state via 'set')
  increment: (by = 1) => set((state) => ({ count: state.count + by })),

  decrement: () => set((state) => ({ count: state.count - 1 })),

  reset: () => set({ count: 0 }), // Can also set directly if not based on previous state
}));

export default useCounterStore;