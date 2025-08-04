// Snippet 24 from Chapter 4
// Section: Responsive Design Deep Dive
// Subsection: Customizing Breakpoints
// Language: js
// Description: /** @type {import('tailwindcss').Config} */
// 
/** @type {import('tailwindcss').Config} */
export default {
  content: [ /* ... */ ],
  theme: {
    // Override all default screens
    // screens: {
    //   'tablet': '640px',
    //   'laptop': '1024px',
    //   'desktop': '1280px',
    // },
    extend: {
      // Add or override specific screens, keeping defaults
      screens: {
        '3xl': '1600px', // Add a new larger breakpoint
        'md': '800px',   // Change the 'md' breakpoint value
      },
      // ... other theme extensions
    },
  },
  plugins: [],
}