// Snippet 32 from Chapter 5
// Section: Functional Components and Props
// Subsection: Defining Prop Types with TypeScript
// Language: typescript
// Description: import React from 'react';
// 
import React from 'react';

// Define the shape of the props object for a UserProfile component
interface UserProfileProps {
  username: string;
  age: number;
  isActive: boolean;
  hobbies?: string[]; // Optional array of strings
}

// Define the functional component, typing its props argument
// Method 1: Typing the props object directly (Recommended)
function UserProfile(props: UserProfileProps): JSX.Element {
  return (
    <div>
      <h2>{props.username}</h2>
      <p>Age: {props.age}</p>
      <p>Status: {props.isActive ? 'Active' : 'Inactive'}</p>
      {props.hobbies && ( // Conditionally render hobbies if provided
        <>
          <h3>Hobbies:</h3>
          <ul>
            {props.hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
          </ul>
        </>
      )}
    </div>
  );
}

// Method 2: Using React.FC with a generic type (Less common now)
// const UserProfileFC: React.FC<UserProfileProps> = (props) => {
//   // ... same return JSX as above ...
//   // Note: React.FC implicitly includes 'children', which might not be desired
//   return ( /* ... JSX ... */ );
// };

export default UserProfile; // Export the component for use elsewhere