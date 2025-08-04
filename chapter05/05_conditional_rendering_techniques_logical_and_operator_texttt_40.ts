// Snippet 40 from Chapter 5
// Section: Conditional Rendering Techniques
// Subsection: Logical AND Operator (\texttt{\&\&
// Source: Building User Interfaces with React/Conditional Rendering Techniques.tex (line 93)
// Language: typescript
// Description: import React, { useState } from 'react';
// 
import React, { useState } from 'react';

interface MessageBoxProps {
  unreadMessages: number;
}

function Mailbox({ unreadMessages }: MessageBoxProps): JSX.Element {
  return (
    <div>
      <h1>Mailbox</h1>
      {/* Only render the <p> if unreadMessages > 0 */}
      {unreadMessages > 0 &&
        <p>You have {unreadMessages} unread messages.</p>
      }
      {/* Avoid rendering '0' by ensuring the left side is boolean */}
      {Boolean(unreadMessages) &&
         <p>Alternative check for non-zero messages.</p>
      }
    </div>
  );
}

function App() {
    const [count, setCount] = useState(5);
    return <Mailbox unreadMessages={count} />;
}