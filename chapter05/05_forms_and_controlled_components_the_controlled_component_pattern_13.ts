// Snippet 13 from Chapter 5
// Section: Forms and Controlled Components
// Subsection: The Controlled Component Pattern
// Language: typescript
// Description: import React, { useState, ChangeEvent } from 'reac...
// 
import React, { useState, ChangeEvent } from 'react';

function NameForm(): JSX.Element {
  // 1. State variable to hold the input's value
  const [name, setName] = useState<string>('');

  // 2. onChange handler to update the state
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value); // Update state with the input's current value
  };

  return (
    <form>
      <label htmlFor="nameInput">Name:</label>
      <input
        type="text"
        id="nameInput"
        value={name} // 1. Value is bound to the 'name' state variable
        onChange={handleNameChange} // 2. State is updated on change
      />
      <p>Current name in state: {name}</p>
    </form>
  );
}

export default NameForm;