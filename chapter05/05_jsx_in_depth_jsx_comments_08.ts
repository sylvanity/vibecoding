// Snippet 08 from Chapter 5
// Section: JSX In-Depth
// Subsection: JSX Comments
// Language: typescript
// Description: function CommentExample() {
// 
function CommentExample() {
  return (
    <div>
      {/* This is a comment inside JSX */}
      <h1>Section Title</h1>
      <p>Some content here.</p>
      {/* Multi-line comments
          are also possible
          within the braces. */}
    </div>
  );
}