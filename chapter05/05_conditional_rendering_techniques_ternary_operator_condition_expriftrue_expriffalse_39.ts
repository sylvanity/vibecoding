// Snippet 39 from Chapter 5
// Section: Conditional Rendering Techniques
// Subsection: Ternary Operator (condition ? exprIfTrue : exprIfFalse)
// Language: typescript
// Description: import React, { useState } from 'react';
// 
import React, { useState } from 'react';

function ToggleButton(): JSX.Element {
  const [isOn, setIsOn] = useState(false);

  return (
    <button onClick={() => setIsOn(!isOn)}>
      {/* Use ternary operator to display different text */}
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}

function LoadingIndicator({ isLoading }: { isLoading: boolean }): JSX.Element {
    return (
        <div>
            {isLoading ? <p>Loading data...</p> : <p>Data loaded!</p>}
        </div>
    );
}