// Snippet 50 from Chapter 7
// Section: Consuming APIs from React
// Subsection: Using the \texttt{fetch
// Source: Backend Interaction (REST APIs and Supabase_SQL)/Consuming APIs from React.tex (line 52)
// Language: typescript
// Description: const userData = { name: "Sylvia", job: "Developer...
// 
const userData = { name: "Sylvia", job: "Developer" };

fetch('https://api.example.com/users', {
  method: 'POST', // Specify the HTTP method
  headers: {
    // Set request headers
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_TOKEN' // Example auth header
  },
  // Convert the JavaScript object to a JSON string for the body
  body: JSON.stringify(userData)
})
.then(response => {
  if (!response.ok) {
    // Handle potential errors like 400 Bad Request or 500 Server Error
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  // Often a 201 Created status for POST has a body
  return response.json();
})
.then(createdUser => {
  console.log('User created:', createdUser);
})
.catch(error => {
  console.error('Error creating user:', error);
});