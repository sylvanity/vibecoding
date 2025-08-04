// Snippet 12 from Chapter 6
// Section: Redux Toolkit: Opinionated, Predictable State
// Subsection: Handling Asynchronous Logic (\texttt{createAsyncThunk
// Source: State Management in React/Redux Toolkit: Opinionated, Predictable State.tex (line 219)
// Language: typescript
// Description: import { createSlice, createAsyncThunk, PayloadAct...
// 
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
// Assume fetchUserData is an async function that fetches user data from an API
declare function fetchUserData(userId: string): Promise<{ id: string; name: string; }>;

interface UserState {
  entities: { [id: string]: { id: string; name: string; } };
  loading: 'idle' | 'pending';
  error: string | null;
}
const initialState: UserState = { entities: {}, loading: 'idle', error: null };

// 1. Create the async thunk
export const fetchUserById = createAsyncThunk(
  'users/fetchById', // Action type prefix
  async (userId: string, thunkAPI) => {
    // Payload creator function: performs the async logic
    try {
      const response = await fetchUserData(userId);
      return response; // This becomes the 'fulfilled' action payload
    } catch (err: any) {
      // Use rejectWithValue to return a specific error payload
      return thunkAPI.rejectWithValue(err.message || 'Failed to fetch user');
    }
  }
);

// 2. Handle the thunk actions in the slice reducer using 'extraReducers'
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Standard reducers can go here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = 'idle';
        // action.payload is the data returned from the payload creator
        state.entities[action.payload.id] = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = 'idle';
        // action.payload is the value from rejectWithValue
        state.error = action.payload as string;
      });
  },
});

export default usersSlice.reducer;

// 3. Dispatch the async thunk from a component
import { useEffect } from 'react'; // Added import for useEffect
import { useSelector, useDispatch } from 'react-redux'; // Added imports
import type { RootState, AppDispatch } from './app/store'; // Added imports

function UserProfile({ userId }: { userId: string }): JSX.Element {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.users.entities[userId]);
    const loading = useSelector((state: RootState) => state.users.loading);

    useEffect(() => {
        if (!user && loading !== 'pending') { // Fetch only if user not present and not already loading
            dispatch(fetchUserById(userId));
        }
    }, [dispatch, userId, user, loading]);

    // ... render user profile based on user and loading state ...
    return (<div>{/* Placeholder for rendering logic */}</div>);
}