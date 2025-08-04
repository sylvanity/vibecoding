// Snippet 31 from Chapter 5
// Section: Functional Components and Props
// Subsection: Defining Functional Components (\texttt{React.FC
// Source: Building User Interfaces with React/Functional Components and Props.tex (line 26)
// Language: typescript
// Description: import React from 'react'; // Usually needed, thou...
// 
import React from 'react'; // Usually needed, though modern setups might handle it implicitly

// Simple component with no props
function WelcomeMessage(): JSX.Element { // Explicit return type JSX.Element
  return <h1>Hello from a Functional Component!</h1>;
}

// Using React.FC (less common now for simple cases, but provides 'children' implicitly)
const AnotherWelcome: React.FC = () => {
  return <p>Another greeting!</p>;
};

// Component returning null (renders nothing)
const NullComponent: React.FC = () => {
  return null;
};

// Usage within another component's JSX
function App() {
  return (
    <div>
      <WelcomeMessage />
      <AnotherWelcome />
      <NullComponent /> {/* Renders nothing */}
    </div>
  );
}