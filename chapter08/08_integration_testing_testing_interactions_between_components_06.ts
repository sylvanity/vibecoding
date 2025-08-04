// Snippet 06 from Chapter 8
// Section: Integration Testing
// Subsection: Testing Interactions Between Components
// Language: typescript
// Description: import React, { useState } from 'react';
// 
// Assume ParentComponent renders ChildComponent and passes state/callbacks
// ParentComponent.tsx
import React, { useState } from 'react';
import ChildComponent from './ChildComponent'; // Assume ChildComponent exists

function ParentComponent() {
  const [message, setMessage] = useState("Initial Message");
  // Callback function passed to child
  const updateMessage = (newMessage: string) => setMessage(newMessage);

  return (
    <div>
      <h1>Parent</h1>
      {/* Display the message */}
      <p data-testid="parent-message">{message}</p>
      {/* Render child and pass the callback */}
      <ChildComponent onUpdate={updateMessage} />
    </div>
  );
}

// ChildComponent.tsx - Assume this component exists and receives onUpdate prop
// interface ChildProps { onUpdate: (msg: string) => void; }
// function ChildComponent({ onUpdate }: ChildProps) {
//   return <button onClick={() => onUpdate("Updated from Child")}>Update Parent</button>;
// }

// ParentComponent.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ParentComponent from './ParentComponent';
import '@testing-library/jest-dom'; // Ensure matchers are available
import { describe, it, expect } from 'vitest'; // Or from Jest

describe('<ParentComponent /> Integration', () => {
  it('updates parent message when child button is clicked', async () => {
    const user = userEvent.setup();
    render(<ParentComponent />); // Render the parent component

    // Verify initial state in the parent
    expect(screen.getByTestId('parent-message')).toHaveTextContent("Initial Message");

    // Find the button within the child component (rendered by ParentComponent)
    const updateButton = screen.getByRole('button', { name: /update parent/i });
    // Simulate a click on the child's button
    await user.click(updateButton);

    // Assert that the parent's displayed message was updated via the callback
    expect(screen.getByTestId('parent-message')).toHaveTextContent("Updated from Child");
  });
});