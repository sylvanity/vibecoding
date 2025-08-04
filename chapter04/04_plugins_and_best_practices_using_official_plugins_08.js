// Snippet 08 from Chapter 4
// Section: Plugins and Best Practices
// Subsection: Using Official Plugins
// Language: js
// Description: /** @type {import('tailwindcss').Config} */
// 
/** @type {import('tailwindcss').Config} */
export default {
  content: [ /* ... */ ],
  theme: {
    extend: { /* ... */ },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    // Add other plugins here
  ],
}