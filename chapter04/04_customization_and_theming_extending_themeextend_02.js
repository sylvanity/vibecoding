// Snippet 02 from Chapter 4
// Section: Customization and Theming
// Subsection: Extending (theme.extend)
// Language: js
// Description: /** @type {import('tailwindcss').Config} */
// 
/** @type {import('tailwindcss').Config} */
export default {
  content: [ /* ... */ ],
  theme: {
    extend: {
      // Add custom values while keeping Tailwind defaults
      colors: {
        'brand-primary': '#1E40AF', // Example: bg-brand-primary
        'brand-secondary': '#BE123C',
        'custom-gray': { // Nested scale
          light: '#F3F4F6',
          DEFAULT: '#6B7280', // Used for 'text-custom-gray'
          dark: '#1F2937',
        }
      },
      spacing: {
        '128': '32rem', // Add a larger spacing utility: p-128, w-128 etc.
        'main-gutter': '5vw', // Add custom spacing: px-main-gutter
      },
      fontFamily: {
        // Add a custom font family, keeping sans, serif, mono defaults
        heading: ['Georgia', 'serif'], // Example: font-heading
      },
      screens: {
        '3xl': '1920px', // Add a larger breakpoint
      },
      // Example: Add custom border radius
      borderRadius: {
        '4xl': '2rem', // Example: rounded-4xl
      }
    },
  },
  plugins: [],
}