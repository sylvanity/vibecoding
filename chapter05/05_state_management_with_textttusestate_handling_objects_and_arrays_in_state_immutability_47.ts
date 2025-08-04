// Snippet 47 from Chapter 5
// Section: State Management with \texttt{useState
// Subsection: Handling Objects and Arrays in State (Immutability)
// Source: Building User Interfaces with React/State Management with `useState`.tex (line 187)
// Language: typescript
// Description: import { useState } from 'react';
// 
import { useState } from 'react';

interface Position { x: number; y: number; }
interface Item { id: number; text: string; }
interface User { name: string; email: string; preferences: { theme: string; notifications: boolean; }; }

function ImmutabilityDemo(): JSX.Element {
  // --- Object State Examples ---
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [user, setUser] = useState<User>({
    name: "Alice",
    email: "alice@example.com",
    preferences: { theme: "light", notifications: true }
  });

  // ✅ CORRECT: Immutable object updates
  const moveRight = () => {
    setPosition(prevPos => ({ ...prevPos, x: prevPos.x + 10 }));
  };

  const updateUserName = (newName: string) => {
    setUser(prevUser => ({ ...prevUser, name: newName }));
  };

  const updateTheme = (newTheme: string) => {
    setUser(prevUser => ({
      ...prevUser,
      preferences: { ...prevUser.preferences, theme: newTheme }
    }));
  };

  // ❌ WRONG: Direct mutation (will cause issues)
  const moveRightWrong = () => {
    position.x += 10; // MUTATION!
    setPosition(position); // React won't detect this change!
  };

  // --- Array State Examples ---
  const [items, setItems] = useState<Item[]>([
    { id: 1, text: "First Item" },
    { id: 2, text: "Second Item" }
  ]);

  // ✅ CORRECT: Immutable array updates
  const addItem = () => {
    const newItem: Item = { id: Date.now(), text: `Item ${items.length + 1}` };
    setItems(prevItems => [...prevItems, newItem]);
  };

  const removeItem = (idToRemove: number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== idToRemove));
  };

  const updateItem = (idToUpdate: number, newText: string) => {
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === idToUpdate ? { ...item, text: newText } : item
      )
    );
  };

  // ❌ WRONG: Direct array mutation
  const addItemWrong = () => {
    const newItem: Item = { id: Date.now(), text: `Item ${items.length + 1}` };
    items.push(newItem); // MUTATION!
    setItems(items); // React won't detect this change!
  };

  return (
    <div>
      <h3>Object State Examples</h3>
      <p>Position: ({position.x}, {position.y})</p>
      <button onClick={moveRight}>Move Right (Correct)</button>
      <button onClick={moveRightWrong}>Move Right (Wrong)</button>
      
      <p>User: {user.name} ({user.email}) - Theme: {user.preferences.theme}</p>
      <button onClick={() => updateUserName("Bob")}>Update Name</button>
      <button onClick={() => updateTheme("dark")}>Switch Theme</button>

      <h3>Array State Examples</h3>
      <button onClick={addItem}>Add Item (Correct)</button>
      <button onClick={addItemWrong}>Add Item (Wrong)</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => updateItem(item.id, `${item.text} (Updated)`)}>
              Update
            </button>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}