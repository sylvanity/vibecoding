// Snippet 08 from Chapter 6
// Section: Redux Toolkit: Opinionated, Predictable State
// Subsection: Creating Slices and the Store
// Language: typescript
// Description: import { createSlice, PayloadAction } from '@redux...
// 
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the interface for the slice state
interface CounterSliceState {
  value: number;
  status: 'idle' | 'loading';
}

// Define the initial state
const initialState: CounterSliceState = {
  value: 0,
  status: 'idle',
};

// Create the slice
const counterSlice = createSlice({
  name: 'counter', // Name used in action types (e.g., 'counter/increment')
  initialState,
  // Reducers define how state changes in response to actions
  reducers: {
    // Action creators are generated automatically: counterSlice.actions.increment()
    increment: (state) => {
      // Immer allows "mutating" logic here - it handles immutability
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use PayloadAction<T> to type the action payload
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    // Example for async thunk (will be handled by extraReducers later)
    setStatus: (state, action: PayloadAction<'idle' | 'loading'>) => {
        state.status = action.payload;
    }
  },
  // 'extraReducers' handles actions defined outside the slice (e.g., from createAsyncThunk)
  // See async logic section later
});

// Export the generated action creators
export const { increment, decrement, incrementByAmount, setStatus } = counterSlice.actions;

// Export the reducer function for the store
export default counterSlice.reducer;