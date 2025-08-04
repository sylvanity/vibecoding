// Snippet 20 from Chapter 5
// Section: Advanced Hooks
// Subsection: useCallback
// Language: typescript
// Description: import React, { useState, useMemo } from 'react';
// 
import React, { useState, useMemo } from 'react';

// Assume expensiveCalculation is a costly function
declare function expensiveCalculation(num: number): number;

function MemoDemo({ num }: { num: number }): JSX.Element {
  // Recompute 'result' only when 'num' changes
  const result = useMemo(() => {
    console.log('Performing expensive calculation...');
    return expensiveCalculation(num);
  }, [num]); // Dependency array

  return <div>Result: {result}</div>;
}