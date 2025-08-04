// Snippet 45 from Chapter 5
// Section: State Management with useState
// Subsection: Typing State (useState<Type>)
// Language: typescript
// Description: const [age, setAge] = useState(0);
// 
// Type inferred as 'number' from initial value 0
const [age, setAge] = useState(0);

// Type inferred as 'string' from initial value ""
const [username, setUsername] = useState("");

// Type inferred as 'boolean' from initial value false
const [isLoading, setIsLoading] = useState(false);