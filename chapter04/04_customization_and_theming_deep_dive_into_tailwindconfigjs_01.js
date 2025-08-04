// Snippet 01 from Chapter 4
// Section: Customization and Theming
// Subsection: Deep Dive into tailwind.config.js
// Language: js
// Description: /** @type {import('tailwindcss').Config} */
// 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Keys for customization: screens, colors, spacing, fontFamily, etc.
    screens: { /* ... */ },
    colors: { /* ... */ },
    spacing: { /* ... */ },
    fontFamily: { /* ... */ },
    // ... other theme sections ...

    extend: {
      // Add extensions here without overriding defaults entirely
      colors: { /* ... */ },
      spacing: { /* ... */ },
      // ... other theme sections ...
    }
  },
  plugins: [
    // Add plugins here
  ],
  // Other configuration options like 'darkMode', 'prefix', etc.
}