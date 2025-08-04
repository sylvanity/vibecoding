// Snippet 10 from Chapter 5
// Section: Handling User Events
// Subsection: Typing Event Handlers and Objects
// Language: typescript
// Description: import React, { useState, MouseEvent, ChangeEvent,...
// 
import React, { useState, MouseEvent, ChangeEvent, FormEvent } from 'react';

function TypedEventHandlerDemo(): JSX.Element {
  const [inputValue, setInputValue] = useState('');

  // Type the event object for onClick on a button
  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked:', event.currentTarget.textContent);
  };

  // Type the event object for onChange on an input
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value); // Access input value safely
    console.log('Input value:', event.target.value);
  };

  // Type the event object for onSubmit on a form
  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted with value:', inputValue);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <button type="button" onClick={handleButtonClick}>
        Log My Text
      </button>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text"
      />
      <button type="submit">Submit</button>
    </form>
  );
}