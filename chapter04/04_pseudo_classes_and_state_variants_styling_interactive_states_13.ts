// Snippet 13 from Chapter 4
// Section: Pseudo-Classes and State Variants
// Subsection: Styling Interactive States
// Language: typescript
// Description: function InteractiveButton(): JSX.Element {
// 
function InteractiveButton(): JSX.Element {
  return (
    <button className="
      bg-blue-500      /* Default background */
      text-white       /* Default text color */
      font-semibold    /* Default font weight */
      py-2 px-4        /* Default padding */
      rounded          /* Default border radius */
      transition       /* Add transition for smoothness */
      duration-150     /* Transition duration */
      ease-in-out      /* Transition timing function */

      hover:bg-blue-700  /* Background on hover */
      hover:shadow-lg    /* Add shadow on hover */

      focus:outline-none /* Remove default focus outline */
      focus:ring-2       /* Add a ring for focus visibility */
      focus:ring-blue-400
      focus:ring-opacity-75

      active:bg-blue-800  /* Background when clicked */
      active:scale-95     /* Slightly shrink when clicked */

      disabled:opacity-50 /* Reduce opacity when disabled */
      disabled:cursor-not-allowed /* Change cursor when disabled */
    "
    // disabled={true} /* Example: Uncomment to see disabled styles */
    >
      Click Me
    </button>
  );
}