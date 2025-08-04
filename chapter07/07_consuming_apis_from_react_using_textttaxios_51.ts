// Snippet 51 from Chapter 7
// Section: Consuming APIs from React
// Subsection: Using \texttt{axios
// Source: Backend Interaction (REST APIs and Supabase_SQL)/Consuming APIs from React.tex (line 100)
// Language: typescript
// Description: import axios from 'axios';
// 
import axios from 'axios';

// GET request
axios.get('https://api.example.com/users/1')
  .then(response => {
    // Data is already parsed in response.data
    console.log('User data (axios):', response.data);
  })
  .catch(error => {
    // Handles network errors AND HTTP errors (4xx/5xx)
    if (error.response) {
      // Server responded with a status code outside the 2xx range
      console.error('Axios error response:', error.response.status, error.response.data);
    } else if (error.request) {
      // Request was made but no response received
      console.error('Axios error request:', error.request);
    } else {
      // Something happened in setting up the request
      console.error('Axios setup error:', error.message);
    }
  });

// POST request
const newUser = { name: "Bob", job: "Designer" };
axios.post('https://api.example.com/users', newUser, {
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN'
    // Content-Type application/json is often default for objects
  }
})
.then(response => {
  console.log('User created (axios):', response.data);
})
.catch(error => {
  console.error('Error creating user (axios):', error);
});