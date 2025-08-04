// Snippet 35 from Chapter 5
// Section: Functional Components and Props
// Subsection: The children
// Language: typescript
// Description: import React, { ReactNode } from 'react'; // Impor...
// 
import React, { ReactNode } from 'react'; // Import ReactNode type

// Define props, explicitly including children
interface CardProps {
  title: string;
  children: ReactNode; // Type for anything renderable by React
}

// Use the children prop
function Card({ title, children }: CardProps): JSX.Element {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
      <h2>{title}</h2>
      <div>
        {children} {/* Render the nested content here */}
      </div>
    </div>
  );
}

// Usage: Pass content between the opening and closing tags
function App() {
  return (
    <div>
      <Card title="Information Card">
        <p>This content is passed as children.</p>
        <button>Click Me Inside Card</button>
      </Card>

      <Card title="Another Card">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </Card>
    </div>
  );
}