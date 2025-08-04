// Snippet 33 from Chapter 5
// Section: Functional Components and Props
// Subsection: Passing Props
// Language: typescript
// Description: function App() {
// 
// Assume UserProfile component and its UserProfileProps interface are imported

function App() {
  const userData = {
    name: "Sylvia",
    userAge: 30,
    status: true,
    interests: ["Coding", "Hiking", "Music"]
  };

  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      <UserProfile
        username={userData.name} // Pass string
        age={userData.userAge}   // Pass number
        isActive={userData.status} // Pass boolean
        hobbies={userData.interests} // Pass array
      />
      <UserProfile
        username="Bob"
        age={45}
        isActive={false}
        // hobbies prop is optional, so we can omit it
      />

      {/* Example passing other types (requires defining props in child) */}
      {/* <Button label="Click Me" onClick={handleClick} style={{ color: 'blue' }} /> */}
    </div>
  );
}

export default App;