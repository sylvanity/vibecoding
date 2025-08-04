// Snippet 26 from Chapter 5
// Section: Handling Side Effects with useEffect
// Subsection: Dependency Array Behavior Explained
// Language: typescript
// Description: const [userId, setUserId] = useState(1);
// 
const [userId, setUserId] = useState(1);

useEffect(() => {
  console.log(`Fetching data for user ${userId}`);
  // Fetch data based on userId...
  // Runs on mount AND whenever userId changes

  return () => {
      console.log(`Cleaning up effect for user ${userId}`);
      // Abort previous fetch if needed...
  };
}, [userId]); // Dependency array includes userId