// Snippet 36 from Chapter 5
// Section: Functional Components and Props
// Subsection: Default Props
// Language: typescript
// Description: interface ButtonProps {
// 
interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary"; // Optional prop
  onClick: () => void;
}

// Provide default value for 'variant' during destructuring
function Button({ label, variant = "primary", onClick }: ButtonProps): JSX.Element {
  const baseStyle = { padding: '10px 15px', border: 'none', cursor: 'pointer' };
  const variantStyle = variant === "primary"
    ? { backgroundColor: 'blue', color: 'white' }
    : { backgroundColor: 'gray', color: 'black' };

  return (
    <button style={{ ...baseStyle, ...variantStyle }} onClick={onClick}>
      {label}
    </button>
  );
}

// Usage
function App() {
  const handleClick = () => alert('Clicked!');
  return (
    <div>
      <Button label="Primary Action" onClick={handleClick} /> {/* variant defaults to 'primary' */}
      <Button label="Secondary Action" variant="secondary" onClick={handleClick} />
    </div>
  );
}