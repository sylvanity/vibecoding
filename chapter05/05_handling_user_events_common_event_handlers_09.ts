// Snippet 09 from Chapter 5
// Section: Handling User Events
// Subsection: Common Event Handlers
// Language: typescript
// Description: import React, { useState } from 'react';
// 
import React, { useState } from 'react';

function EventDemo(): JSX.Element {
  const [message, setMessage] = useState<string>("");

  // Event handler for button click
  const handleClick = () => {
    alert('Button was clicked!');
  };

  // Event handler for input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(`You typed: ${event.target.value}`);
  };

  // Event handler for form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission (page reload)
    alert(`Form submitted with message: ${message}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="button" onClick={handleClick}>Click Me</button>
      <br />
      <input
        type="text"
        placeholder="Type something"
        onChange={handleChange}
      />
      <p>{message}</p>
      <button type="submit">Submit Form</button>
    </form>
  );
}

export default EventDemo;