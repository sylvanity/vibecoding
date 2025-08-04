// Snippet 11 from Chapter 8
// Section: Unit Testing
// Subsection: Testing React Components with React Testing Library (RTL)
// Language: typescript
// Description: import React from 'react';
// 
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Import userEvent
import SimpleCounter from './SimpleCounter';
import '@testing-library/jest-dom'; // Import jest-dom matchers (setup often done globally)

// Vitest/Jest imports
import { describe, it, expect } from 'vitest';

describe('<SimpleCounter />', () => {
  it('renders initial count and buttons', () => {
    // 1. Render the component
    render(<SimpleCounter />);

    // 2. Query elements (using accessible roles and text)
    // Use screen object provided by RTL
    const countDisplay = screen.getByText(/Current Count: 0/i); // Find element containing text (case-insensitive)
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    const decrementButton = screen.getByRole('button', { name: /decrement/i });

    // 3. Assert initial state
    expect(countDisplay).toBeInTheDocument();
    expect(incrementButton).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
    expect(decrementButton).toBeDisabled(); // Initially count is 0
  });

  it('increments count when increment button is clicked', async () => {
    // Setup userEvent (recommended)
    const user = userEvent.setup();
    render(<SimpleCounter />);

    const incrementButton = screen.getByRole('button', { name: /increment/i });

    // 3. Simulate user interaction
    await user.click(incrementButton);

    // 4. Assert the outcome
    expect(screen.getByText(/Current Count: 1/i)).toBeInTheDocument();

    // Click again
    await user.click(incrementButton);
    expect(screen.getByText(/Current Count: 2/i)).toBeInTheDocument();
  });

  it('decrements count when decrement button is clicked (if count > 0)', async () => {
    const user = userEvent.setup();
    render(<SimpleCounter />);

    const incrementButton = screen.getByRole('button', { name: /increment/i });
    const decrementButton = screen.getByRole('button', { name: /decrement/i });

    // Increment first to enable decrement
    await user.click(incrementButton); // Count is now 1
    expect(screen.getByText(/Current Count: 1/i)).toBeInTheDocument();
    expect(decrementButton).not.toBeDisabled(); // Decrement should be enabled

    // Decrement
    await user.click(decrementButton); // Count is now 0
    expect(screen.getByText(/Current Count: 0/i)).toBeInTheDocument();
    expect(decrementButton).toBeDisabled(); // Decrement disabled again at 0
  });

  it('does not decrement below zero', async () => {
    const user = userEvent.setup();
    render(<SimpleCounter />);

    const decrementButton = screen.getByRole('button', { name: /decrement/i });

    // Assert initial state
    expect(screen.getByText(/Current Count: 0/i)).toBeInTheDocument();
    expect(decrementButton).toBeDisabled();

    // Attempt to click disabled button (userEvent handles this gracefully)
    await user.click(decrementButton);

    // Assert count remains 0
    expect(screen.getByText(/Current Count: 0/i)).toBeInTheDocument();
  });
});