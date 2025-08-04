// Snippet 11 from Chapter 5
// Section: Performance Optimization with React.memo and useMemo
// Subsection: Component Memoization with React.memo
// Language: typescript
// Description: import React, { useState } from 'react';
// 
import React, { useState } from 'react';

interface WidgetProps {
  title: string;
  data: number;
  color: string;
}

// Without React.memo - re-renders on every parent update
const WidgetWithoutMemo: React.FC<WidgetProps> = ({ title, data, color }) => {
  console.log(`Widget ${title} rendering`);
  return (
    <div style={{ backgroundColor: color, padding: '10px', margin: '5px' }}>
      <h3>{title}</h3>
      <p>Data: {data}</p>
    </div>
  );
};

// With React.memo - only re-renders when props change
const WidgetWithMemo: React.FC<WidgetProps> = React.memo(({ title, data, color }) => {
  console.log(`Widget ${title} rendering`);
  return (
    <div style={{ backgroundColor: color, padding: '10px', margin: '5px' }}>
      <h3>{title}</h3>
      <p>Data: {data}</p>
    </div>
  );
});

// Dashboard component that manages multiple widgets
const Dashboard: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [widget1Data, setWidget1Data] = useState(100);
  const [widget2Data, setWidget2Data] = useState(200);

  return (
    <div>
      <h2>Dashboard (Counter: {counter})</h2>
      <button onClick={() => setCounter(c => c + 1)}>
        Update Counter
      </button>
      
      <div style={{ display: 'flex', gap: '10px' }}>
        {/* This widget re-renders on every counter update */}
        <WidgetWithoutMemo 
          title="Widget 1 (No Memo)" 
          data={widget1Data} 
          color="lightblue" 
        />
        
        {/* This widget only re-renders when its data changes */}
        <WidgetWithMemo 
          title="Widget 2 (With Memo)" 
          data={widget2Data} 
          color="lightgreen" 
        />
      </div>
      
      <div>
        <button onClick={() => setWidget1Data(d => d + 10)}>
          Update Widget 1
        </button>
        <button onClick={() => setWidget2Data(d => d + 10)}>
          Update Widget 2
        </button>
      </div>
    </div>
  );
};

export default Dashboard;