// Snippet 04 from Chapter 8
// Section: Mocking Dependencies
// Subsection: Mocking API Calls (\texttt{fetch
// Source: Testing Your Application/Mocking Dependencies.tex (line 147)
// Language: ts
// Description: import axios from 'axios';
// 
import axios from 'axios';
vi.mock('axios'); // Mock the axios library

// In your test
const mockResponse = { data: { user: 'Test User' } };
vi.mocked(axios.get).mockResolvedValue(mockResponse);

// Component logic calls axios.get('/api/user')
// ... render component ...

// Assertions
expect(axios.get).toHaveBeenCalledWith('/api/user');
// Assert component state based on mockResponse.data