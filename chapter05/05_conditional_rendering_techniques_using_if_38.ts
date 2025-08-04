// Snippet 38 from Chapter 5
// Section: Conditional Rendering Techniques
// Subsection: Using if
// Language: typescript
// Description: import React, { useState } from 'react';
// 
import React, { useState } from 'react';

interface LoginProps { isLoggedIn: boolean; username?: string; }

function LoginStatus({ isLoggedIn, username }: LoginProps): JSX.Element | null {
  // 1. Returning early based on condition
  if (!isLoggedIn) {
    return <p>Please log in.</p>;
  }

  // 2. Using a variable determined by if/else
  let statusMessage: JSX.Element;
  if (username) {
    statusMessage = <span>Welcome back, {username}!</span>;
  } else {
    statusMessage = <span>Welcome!</span>;
  }

  return (
    <div>
      {statusMessage}
      <button>Log Out</button> {/* Only shown if logged in */}
    </div>
  );
}

// Example Usage
function App() {
    const [loggedIn, setLoggedIn] = useState(true);
    const [user, setUser] = useState("Alice");
    return <LoginStatus isLoggedIn={loggedIn} username={user} />;
}