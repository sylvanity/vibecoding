// Snippet 22 from Chapter 5
// Section: Rendering Lists and Keys
// Subsection: Using \texttt{map()
// Source: Building User Interfaces with React/Rendering Lists and Keys.tex (line 24)
// Language: typescript
// Description: import React from 'react';
// 
import React from 'react';

interface Item {
  id: number;
  name: string;
}

const items: Item[] = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' }
];

function ItemList(): JSX.Element {
  // Map over the data array to create an array of <li> elements
  const listItems = items.map((item) =>
    // Key prop added here - see next section
    <li key={item.id}>
      {item.name} (ID: {item.id})
    </li>
  );

  return (
    <div>
      <h2>Items:</h2>
      <ul>
        {listItems} {/* Embed the array of <li> elements */}
      </ul>
    </div>
  );
}

export default ItemList;