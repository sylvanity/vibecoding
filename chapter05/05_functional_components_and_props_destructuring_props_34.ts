// Snippet 34 from Chapter 5
// Section: Functional Components and Props
// Subsection: Destructuring Props
// Language: typescript
// Description: interface GreetingProps {
// 
// Define prop types
interface GreetingProps {
  name: string;
  message?: string; // Optional prop
}

// Destructure props directly in the function signature
function Greeting({ name, message }: GreetingProps): JSX.Element {
  return (
    <div>
      <h1>{message ? message : 'Hello'}, {name}!</h1>
    </div>
  );
}

// Usage
function App() {
  return (
    <div>
      <Greeting name="Alice" message="Welcome" />
      <Greeting name="Bob" /> {/* message prop is optional */}
    </div>
  );
}