// Snippet 52 from Chapter 7
// Section: Consuming APIs from React
// Subsection: Managing API State in React Components
// Language: typescript
// Description: import React, { useState, useEffect } from 'react'...
// 
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Or use fetch

interface User { id: number; name: string; email: string; }

function UserProfile({ userId }: { userId: number }): JSX.Element {
  // State variables for data, loading, and error
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Flag to prevent state update on unmounted component
    let isMounted = true;
    setIsLoading(true); // Set loading true when effect runs
    setError(null);     // Clear previous errors

    axios.get(`https://api.example.com/users/${userId}`)
      .then(response => {
        if (isMounted) { // Only update state if component is still mounted
          setUser(response.data);
        }
      })
      .catch(err => {
        if (isMounted) {
          setError(err.message || 'Failed to fetch user');
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false); // Set loading false when request finishes
        }
      });

    // Cleanup function: set flag to false when component unmounts
    return () => {
      isMounted = false;
    };
  }, [userId]); // Dependency: Re-fetch if userId changes

  // Conditional rendering based on state
  if (isLoading) return <p>Loading user profile...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
  if (!user) return <p>No user data found.</p>; // Should ideally not be reached if !loading and !error

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;