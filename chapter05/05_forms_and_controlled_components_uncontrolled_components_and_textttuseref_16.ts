// Snippet 16 from Chapter 5
// Section: Forms and Controlled Components
// Subsection: Uncontrolled Components and \texttt{useRef
// Source: Building User Interfaces with React/Forms and Controlled Components.tex (line 223)
// Language: typescript
// Description: import React, { useRef, FormEvent } from 'react';
// 
import React, { useRef, FormEvent } from 'react';

function UncontrolledForm(): JSX.Element {
  // Create a ref to hold the input DOM element
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Access the input's current value directly via the ref
    alert(`Input value from ref: ${inputRef.current?.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* No value or onChange prop needed */}
      {/* Attach the ref to the input element */}
      <input type="text" ref={inputRef} defaultValue="Initial Value" />
      <button type="submit">Submit</button>
    </form>
  );
}