// Snippet 10 from Chapter 4
// Section: Plugins and Best Practices
// Subsection: Dark Mode Implementation (dark:)
// Language: js
// Description: /** @type {import('tailwindcss').Config} */
// 
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode based on parent class
  content: [ /* ... */ ],
  theme: { /* ... */ },
  plugins: [],
}