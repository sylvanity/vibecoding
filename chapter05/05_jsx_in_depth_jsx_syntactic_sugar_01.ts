// Snippet 01 from Chapter 5
// Section: JSX In-Depth
// Subsection: JSX: Syntactic Sugar
// Language: typescript
// Description: const elementJsx = (
// 
// --- Writing UI with JSX (Recommended) ---
const elementJsx = (
  <div className="container">
    <h1>Hello, JSX!</h1>
    <p>This looks like HTML.</p>
  </div>
);

// --- What JSX transpiles to (Simplified) ---
const elementCreateElement = React.createElement(
  'div',
  { className: 'container' },
  React.createElement('h1', null, 'Hello, JSX!'),
  React.createElement('p', null, 'This looks like HTML.')
);

// Both elementJsx and elementCreateElement represent the same UI structure.