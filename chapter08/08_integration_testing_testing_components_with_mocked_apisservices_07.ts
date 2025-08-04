// Snippet 07 from Chapter 8
// Section: Integration Testing
// Subsection: Testing Components with Mocked APIs/Services
// Language: typescript
// Description: import { render, screen, waitFor } from '@testing-...
// 
// Import testing utilities and MSW for API mocking
import { render, screen, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import UserProfile from './UserProfile';
import '@testing-library/jest-dom';
import { describe, it, expect, beforeAll, afterEach, afterAll } from 'vitest';

// Configure MSW to intercept API calls and return mock responses
const server = setupServer(
  http.get('/api/users/:userId', ({ params }) => {
    const { userId } = params;
    if (userId === '123') {
      return HttpResponse.json({ name: 'Real User via MSW' });
    }
    return new HttpResponse(null, { status: 404 });
  })
);

// Setup MSW lifecycle hooks for test isolation
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<UserProfile /> API Integration', () => {
  // Test successful API call with loading states
  it('displays loading state then fetched user data', async () => {
    render(<UserProfile userId="123" />);

    // Verify initial loading state is shown
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // Wait for API response and verify user data is displayed
    const userNameElement = await screen.findByText(/Real User via MSW/i);
    expect(userNameElement).toBeInTheDocument();

    // Confirm loading state is removed after data loads
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
  });

  // Test error handling when API returns error status
  it('handles API errors gracefully', async () => {
    // Override default handler to simulate server error
    server.use(
      http.get('/api/users/:userId', () => new HttpResponse(null, { status: 500 }))
    );
    
    render(<UserProfile userId="123" />);
    
    // Wait for error state to be displayed
    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });
});