// Snippet 12 from Chapter 4
// Section: Core Concepts: Applying Utilities
// Subsection: Using \texttt{className
// Source: Styling with Tailwind CSS/Core Concepts: Applying Utilities.tex (line 18)
// Language: typescript
// Description: import React from 'react';
// 
import React from 'react';

function StyledCard(): JSX.Element {
  return (
    // Apply multiple utility classes directly
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      {/* p-6: padding, max-w-sm: max-width, mx-auto: horizontal margin auto, */}
      {/* bg-white: background white, rounded-xl: border radius, shadow-md: box shadow, */}
      {/* flex: display flex, items-center: align-items center, space-x-4: horizontal space between children */}
      <div>
        <div className="text-xl font-medium text-black">ChitChat</div>
        <p className="text-slate-500">You have a new message!</p>
      </div>
    </div>
  );
}

export default StyledCard;