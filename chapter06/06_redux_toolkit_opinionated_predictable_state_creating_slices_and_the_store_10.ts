// Snippet 10 from Chapter 6
// Section: Redux Toolkit: Opinionated, Predictable State
// Subsection: Creating Slices and the Store
// Language: typescript
// Description: import React from 'react';
// 
// In your main application entry point (e.g., main.tsx or index.tsx)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store'; // Import the configured store
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap App with Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);