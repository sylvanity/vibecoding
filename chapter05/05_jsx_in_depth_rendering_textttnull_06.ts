// Snippet 06 from Chapter 5
// Section: JSX In-Depth
// Subsection: Rendering \texttt{null
// Source: Building User Interfaces with React/JSX In-Depth.tex (line 184)
// Language: typescript
// Description: function ConditionalMessage({ show }: { show: bool...
// 
function ConditionalMessage({ show }: { show: boolean }) {
  return (
    <div>
      {show && <p>Message is visible!</p>} {/* Renders <p> only if show is true */}
      {null} {/* Renders nothing */}
      {undefined} {/* Renders nothing */}
      {false} {/* Renders nothing */}
      {true} {/* Renders nothing */}
      Count: {0} {/* Renders "Count: 0" */}
    </div>
  );
}