// Snippet 07 from Chapter 5
// Section: JSX In-Depth
// Subsection: Fragments (\texttt{<>...</>
// Source: Building User Interfaces with React/JSX In-Depth.tex (line 205)
// Language: typescript
// Description: function UserInfo() {
// 
function UserInfo() {
  return (
    <> {/* Fragment shorthand */}
      <h2>User Details</h2>
      <p>Name: Alice</p>
      <p>Status: Active</p>
    </>
    // This avoids rendering an unnecessary wrapper div around the h2 and p tags.
  );
}

// Explicit syntax (needed if you need a 'key' prop, e.g., in lists)
// import React from 'react';
// function ListItem({ item }) {
//   return (
//     <React.Fragment key={item.id}>
//       <td>{item.name}</td>
//       <td>{item.value}</td>
//     </React.Fragment>
//   );
// }