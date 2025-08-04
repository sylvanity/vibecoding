// Snippet 22 from Chapter 4
// Section: Responsive Design Deep Dive
// Subsection: Using Breakpoint Prefixes
// Language: typescript
// Description: function ResponsiveCard(): JSX.Element {
// 
function ResponsiveCard(): JSX.Element {
  return (
    <div className="
      bg-red-200      /* Red background on smallest screens (mobile-first default) */
      sm:bg-green-200  /* Green background at 'sm' breakpoint and up */
      md:bg-blue-200   /* Blue background at 'md' breakpoint and up */
      lg:bg-yellow-200 /* Yellow background at 'lg' breakpoint and up */
      p-4              /* Padding applies to all sizes */
      md:p-8           /* Larger padding at 'md' breakpoint and up */
    ">
      <h2 className="
        text-lg        /* Large text on smallest screens */
        md:text-2xl    /* Extra large text at 'md' breakpoint and up */
      ">
        Responsive Title
      </h2>
      <p className="
        text-sm        /* Small text by default */
        lg:text-base   /* Base text size at 'lg' breakpoint and up */
      ">
        This card changes background color and padding based on screen size.
      </p>
      {/* Hide on small screens, display as block on medium and up */}
      <div className="hidden md:block mt-4">
        Only visible on medium screens and larger.
      </div>
    </div>
  );
}