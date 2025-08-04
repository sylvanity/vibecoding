// Snippet 40 from Chapter 7
// Section: Supabase Features in Practice
// Subsection: Writing and Deploying Basic Edge Functions
// Language: typescript
// Description: import React, { useState } from 'react';
// 
import React, { useState } from 'react';
// Assume 'supabase' client is initialized

function InvokeFunction(): JSX.Element {
  const [greeting, setGreeting] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const callFunction = async () => {
    setIsLoading(true);
    setError('');
    setGreeting('');

    const { data, error: invokeError } = await supabase.functions.invoke(
      'hello-world', // Function name
      {
        body: { name: 'Supabase User' }, // Optional: request body
        // headers: { 'Authorization': `Bearer ${session.access_token}` } // Auth added automatically if user logged in
      }
    );

    if (invokeError) {
      setError(invokeError.message);
      console.error('Function invoke error:', invokeError);
    } else {
      setGreeting(data.message); // Access data returned by the function
    }
    setIsLoading(false);
  };

  return (
    <div>
      <button onClick={callFunction} disabled={isLoading}>
        {isLoading ? 'Calling Function...' : 'Call Hello World Function'}
      </button>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {greeting && <p>Response: {greeting}</p>}
    </div>
  );
}
export default InvokeFunction;