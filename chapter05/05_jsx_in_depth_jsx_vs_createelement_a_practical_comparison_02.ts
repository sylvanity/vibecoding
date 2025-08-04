// Snippet 02 from Chapter 5
// Section: JSX In-Depth
// Subsection: JSX vs. createElement: A Practical Comparison
// Language: typescript
// Description: function UserProfile({ user, showDetails }: { user...
// 
// --- Complex UI with JSX (Readable) ---
function UserProfile({ user, showDetails }: { user: User; showDetails: boolean }) {
  return (
    <div className="user-profile">
      <img src={user.avatar} alt={`${user.name}'s avatar`} />
      <h2>{user.name}</h2>
      {showDetails && (
        <div className="details">
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      )}
    </div>
  );
}

// --- Same UI with createElement (Verbose) ---
function UserProfileCreateElement({ user, showDetails }: { user: User; showDetails: boolean }) {
  return React.createElement(
    'div',
    { className: 'user-profile' },
    React.createElement('img', { 
      src: user.avatar, 
      alt: `${user.name}'s avatar` 
    }),
    React.createElement('h2', null, user.name),
    showDetails && React.createElement(
      'div',
      { className: 'details' },
      React.createElement('p', null, `Email: ${user.email}`),
      React.createElement('p', null, `Role: ${user.role}`)
    )
  );
}