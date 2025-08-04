// Snippet 49 from Chapter 7
// Section: Consuming APIs from React
// Subsection: Using the fetch
// Language: typescript
// Description: fetch('https://api.example.com/users/1')
// 
fetch('https://api.example.com/users/1')
  .then(response => {
    // Check if the response status code indicates success (e.g., 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the response body as JSON
    return response.json();
  })
  .then(data => {
    // Work with the parsed data
    console.log('User data:', data);
  })
  .catch(error => {
    // Handle network errors or errors thrown above
    console.error('Fetch error:', error);
  });