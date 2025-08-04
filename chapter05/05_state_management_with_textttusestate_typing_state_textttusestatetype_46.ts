// Snippet 46 from Chapter 5
// Section: State Management with \texttt{useState
// Subsection: Typing State (\texttt{useState<Type>
// Source: Building User Interfaces with React/State Management with `useState`.tex (line 138)
// Language: typescript
// Description: import { useState } from 'react';
// 
import { useState } from 'react';

interface User { id: number; name: string; }

function UserLoader(): JSX.Element {
  // State can be User object or null initially. Explicit type needed.
  const [user, setUser] = useState<User | null>(null);

  // State can be 'idle', 'loading', 'success', or 'error'
  type Status = 'idle' | 'loading' | 'success' | 'error';
  const [status, setStatus] = useState<Status>('idle');

  const loadUser = () => {
      setStatus('loading');
      // Simulate fetching user data
      setTimeout(() => {
          setUser({ id: 1, name: "Fetched User" });
          setStatus('success');
      }, 1000);
  };

  return (
    <div>
      <button onClick={loadUser} disabled={status === 'loading'}>
        {status === 'loading' ? 'Loading...' : 'Load User'}
      </button>
      {status === 'success' && user && <p>Welcome, {user.name}!</p>}
      {status === 'error' && <p>Failed to load user.</p>}
    </div>
  );
}