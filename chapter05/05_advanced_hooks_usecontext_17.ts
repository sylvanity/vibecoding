// Snippet 17 from Chapter 5
// Section: Advanced Hooks
// Subsection: useContext
// Language: typescript
// Description: import React, { useState, useContext, createContex...
// 
import React, { useState, useContext, createContext, ReactNode } from 'react';

// Define the shape of the context data
type Theme = 'light' | 'dark';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// 1. Create Context with a default value (or null/undefined if handled properly)
// Providing a default implementation can help with testing or standalone use
const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => console.warn('no theme provider')
});

// Custom hook for consuming the context (optional but good practice)
function useTheme(): ThemeContextType {
    return useContext(ThemeContext);
}

// 2. Create a Provider component to manage and provide the context value
function ThemeProvider({ children }: { children: ReactNode }): JSX.Element {
  const [theme, setTheme] = useState<Theme>('light');
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Consume the context in a nested component
function ThemedButton(): JSX.Element {
  const { theme, toggleTheme } = useTheme(); // Use the custom hook

  const styles = {
    backgroundColor: theme === 'light' ? '#eee' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '10px',
    border: 'none',
    cursor: 'pointer'
  };

  return (
    <button style={styles} onClick={toggleTheme}>
      Toggle Theme (Current: {theme})
    </button>
  );
}

// App component setting up the provider
function App(): JSX.Element {
  return (
    <ThemeProvider>
      {/* ThemedButton can access the theme without props being passed down */}
      <ThemedButton />
      {/* Other components here */}
    </ThemeProvider>
  );
}

export default App;