// Snippet 15 from Chapter 5
// Section: Forms and Controlled Components
// Subsection: Managing Form State with \texttt{useState
// Source: Building User Interfaces with React/Forms and Controlled Components.tex (line 157)
// Language: typescript
// Description: import React, { useState, ChangeEvent, FormEvent }...
// 
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  firstName: string;
  email: string;
}

function SignUpForm(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({ firstName: '', email: '' });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // Get name and value from the input
    // Update state using functional update and spread syntax
    setFormData(prevData => ({
      ...prevData, // Copy existing state
      [name]: value // Update the specific field using computed property name
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
     event.preventDefault();
     console.log("Form Data:", formData);
     alert(`Submitting: ${formData.firstName}, ${formData.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName" // 'name' attribute must match state object key
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="email"
        name="email" // 'name' attribute must match state object key
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}