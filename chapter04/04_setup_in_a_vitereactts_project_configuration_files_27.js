// Snippet 27 from Chapter 4
// Section: Setup in a Vite/React/TS Project
// Subsection: Configuration Files
// Language: js
// Description: /** @type {import('tailwindcss').Config} */
// 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Include your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS/TS/JSX/TSX files in src
  ],
  theme: {
    extend: {
      // Add custom theme extensions here (colors, fonts, etc.)
    },
  },
  plugins: [
    // Add Tailwind plugins here (e.g., require('@tailwindcss/forms'))
  ],
}