// Snippet 03 from Chapter 5
// Section: JSX In-Depth
// Subsection: Embedding Expressions (\texttt{\{...\
// Source: Building User Interfaces with React/JSX In-Depth.tex (line 115)
// Language: typescript
// Description: const userName = "Sylvia";
// 
const userName = "Sylvia";
const score = 95;
const items = ["Apple", "Banana", "Cherry"];

function formatGreeting(name: string): string {
    return `Welcome back, ${name}!`;
}

const userCard = (
  <div>
    {/* Variable */}
    <h2>{formatGreeting(userName)}</h2>

    {/* Arithmetic expression */}
    <p>Your score is: {score}% (Grade: {score >= 90 ? 'A' : 'B'})</p>

    {/* Function call */}
    <p>Current Time: {new Date().toLocaleTimeString()}</p>

    {/* Array map to create list elements */}
    <ul>
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>

    {/* Conditional rendering with && */}
    {score > 90 && <p>Excellent work!</p>}
  </div>
);