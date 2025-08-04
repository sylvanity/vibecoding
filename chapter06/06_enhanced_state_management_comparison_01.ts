// Snippet 01 from Chapter 6
// Section: Enhanced State Management Comparison
// Subsection: 
// Language: typescript
// Description: import { create } from 'zustand';
// 
import { create } from 'zustand';

interface CounterStore {
  count: number;
  user: { name: string; email: string };
  increment: () => void;
  updateUser: (name: string, email: string) => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  user: { name: '', email: '' },
  increment: () => set((state) => ({ count: state.count + 1 })),
  updateUser: (name, email) => set({ user: { name, email } }),
}));

function Counter() {
  const { count, increment } = useCounterStore();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

function UserForm() {
  const { user, updateUser } = useCounterStore();
  
  return (
    <div>
      <input
        value={user.name}
        onChange={(e) => updateUser(e.target.value, user.email)}
      />
    </div>
  );
}