// Snippet 05 from Chapter 5
// Section: JSX In-Depth
// Subsection: Specifying Attributes
// Language: typescript
// Description: const styles = { color: 'red', backgroundColor: 'b...
// 
// Incorrect (string): <div style="color: red; background-color: blue;">
// Correct (object):
const styles = { color: 'red', backgroundColor: 'blue', paddingTop: '10px' };
const styledDiv = <div style={styles}>Styled Content</div>;