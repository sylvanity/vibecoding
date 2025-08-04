// Snippet 06 from Chapter 4
// Section: Plugins and Best Practices
// Subsection: Conditional Classes in React (\texttt{clsx
// Source: Styling with Tailwind CSS/Plugins and Best Practices.tex (line 69)
// Language: typescript
// Description: import React from 'react';
// 
import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface AlertProps {
  type: 'info' | 'warning' | 'error';
  message: string;
  isDismissible?: boolean;
}

// Helper function combining both libraries
function cn(...inputs: clsx.ClassValue[]) {
  return twMerge(clsx(inputs));
}

function Alert({ type, message, isDismissible }: AlertProps): JSX.Element {
  const baseClasses = 'p-4 rounded border mb-4';
  const typeClasses = {
    info: 'bg-blue-100 border-blue-300 text-blue-800',
    warning: 'bg-yellow-100 border-yellow-300 text-yellow-800',
    error: 'bg-red-100 border-red-300 text-red-800',
  };

  // Construct className string conditionally and merge conflicting classes
  const finalClassName = cn(
    baseClasses,
    typeClasses[type],
    { 'pr-8 relative': isDismissible } // Add padding only if dismissible
  );

  return (
    <div className={finalClassName} role="alert">
      {message}
      {isDismissible && (
        <button className="absolute top-0 bottom-0 right-0 px-4 py-3">
           {/* Add close icon, potentially using group-hover from parent */}
           X
        </button>
      )}
    </div>
  );
}