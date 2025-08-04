// Snippet 09 from Chapter 6
// Section: Redux Toolkit: Opinionated, Predictable State
// Subsection: Creating Slices and the Store
// Language: typescript
// Description: import { configureStore } from '@reduxjs/toolkit';
// 
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice'; // Import slice reducer
// Import other slice reducers here...
// import userReducer from './features/users/userSlice';

// Combine reducers and configure the store
export const store = configureStore({
  reducer: {
    // Define the structure of your root state object
    counter: counterReducer,
    // users: userReducer,
    // ... other reducers
  },
  // Middleware is automatically added by configureStore (e.g., thunk, devtools)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;