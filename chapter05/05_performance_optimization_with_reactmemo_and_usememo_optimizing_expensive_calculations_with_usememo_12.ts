// Snippet 12 from Chapter 5
// Section: Performance Optimization with React.memo and useMemo
// Subsection: Optimizing Expensive Calculations with useMemo
// Language: typescript
// Description: import React, { useState, useMemo } from 'react';
// 
import React, { useState, useMemo } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Alice Johnson", email: "alice@example.com", age: 28 },
    { id: 2, name: "Bob Smith", email: "bob@example.com", age: 32 },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", age: 25 },
    { id: 4, name: "Diana Prince", email: "diana@example.com", age: 30 },
    { id: 5, name: "Eve Wilson", email: "eve@example.com", age: 29 },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'age'>('name');
  const [renderCount, setRenderCount] = useState(0);

  // Expensive calculation that runs on every render without useMemo
  const filteredAndSortedUsersWithoutMemo = users
    .filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else {
        return a.age - b.age;
      }
    });

  // Optimized calculation that only runs when dependencies change
  const filteredAndSortedUsersWithMemo = useMemo(() => {
    console.log('Performing expensive calculation...');
    return users
      .filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => {
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else {
          return a.age - b.age;
        }
      });
  }, [users, searchTerm, sortBy]); // Dependencies array

  return (
    <div>
      <h2>User List (Renders: {renderCount})</h2>
      <button onClick={() => setRenderCount(c => c + 1)}>
        Force Re-render
      </button>
      
      <div style={{ margin: '10px 0' }}>
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value as 'name' | 'age')}>
          <option value="name">Sort by Name</option>
          <option value="age">Sort by Age</option>
        </select>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <div>
          <h3>Without useMemo (recalculates on every render)</h3>
          <ul>
            {filteredAndSortedUsersWithoutMemo.map(user => (
              <li key={user.id}>
                {user.name} ({user.age}) - {user.email}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3>With useMemo (cached calculation)</h3>
          <ul>
            {filteredAndSortedUsersWithMemo.map(user => (
              <li key={user.id}>
                {user.name} ({user.age}) - {user.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserList;