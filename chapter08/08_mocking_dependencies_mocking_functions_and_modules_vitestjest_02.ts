// Snippet 02 from Chapter 8
// Section: Mocking Dependencies
// Subsection: Mocking Functions and Modules (Vitest/Jest)
// Language: ts
// Description: import { render, screen, waitFor } from '@testing-...
// 
// Assume we have: src/utils/apiClient.ts
// export const fetchUserDetails = async (id: string) => { /* ... real fetch ... */ };

// In our test file: src/components/UserProfile.test.ts
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserProfile from './UserProfile'; // Component that uses fetchUserDetails
import { fetchUserDetails } from '../utils/apiClient'; // Import the function to mock
import { describe, it, expect, vi } from 'vitest'; // or jest
import '@testing-library/jest-dom';

// 1. Mock the entire module containing the dependency
vi.mock('../utils/apiClient'); // Hoisted to the top by Vitest/Jest

describe('<UserProfile />', () => {
  it('fetches and displays user data', async () => {
    // 2. Define the mock implementation for the specific function
    const mockUserData = { name: 'Mock User', email: 'mock@example.com' };
    // Use type assertion for the mocked function
    vi.mocked(fetchUserDetails).mockResolvedValue(mockUserData);

    render(<UserProfile userId="123" />);

    // Assert loading state initially (implementation dependent)
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // 3. Wait for async operations and assertions
    // findBy* queries wait for the element to appear
    expect(await screen.findByText(/Mock User/i)).toBeInTheDocument();
    expect(screen.getByText(/mock@example.com/i)).toBeInTheDocument();

    // Verify the mocked function was called
    expect(fetchUserDetails).toHaveBeenCalledTimes(1);
    expect(fetchUserDetails).toHaveBeenCalledWith("123");
  });
});