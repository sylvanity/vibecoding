// Snippet 41 from Chapter 5
// Section: Conditional Rendering Techniques
// Subsection: Returning null
// Language: typescript
// Description: import React from 'react';
// 
import React from 'react';

interface AdminPanelProps {
  isAdmin: boolean;
}

function AdminPanel({ isAdmin }: AdminPanelProps): JSX.Element | null {
  // If the user is not an admin, render nothing
  if (!isAdmin) {
    return null;
  }

  // Otherwise, render the admin controls
  return (
    <div>
      <h2>Admin Controls</h2>
      {/* ... admin buttons/forms ... */}
      <p>Welcome, Admin!</p>
    </div>
  );
}

function App() {
    const userIsAdmin = false; // Or true
    return (
        <div>
            <h1>Dashboard</h1>
            <AdminPanel isAdmin={userIsAdmin} />
            <p>Regular content visible to everyone.</p>
        </div>
    );
}