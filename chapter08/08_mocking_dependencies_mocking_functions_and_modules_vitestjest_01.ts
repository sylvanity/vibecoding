// Snippet 01 from Chapter 8
// Section: Mocking Dependencies
// Subsection: Mocking Functions and Modules (Vitest/Jest)
// Language: ts
// Description: import { describe, it, expect, vi } from 'vitest';...
// 
import { describe, it, expect, vi } from 'vitest'; // or jest

// Example function that uses a callback
function processData(data: string[], callback: (item: string) => void) {
  data.forEach(item => {
    // ... some processing ...
    callback(item.toUpperCase());
  });
}

describe('processData', () => {
  it('should call the callback for each item with uppercase value', () => {
    // Arrange: Create a mock callback function
    const mockCallback = vi.fn(); // or jest.fn();
    const testData = ['apple', 'banana'];

    // Act: Call the function with the mock callback
    processData(testData, mockCallback);

    // Assert: Check how the mock was called
    expect(mockCallback).toHaveBeenCalledTimes(2); // Was it called twice?
    expect(mockCallback).toHaveBeenCalledWith('APPLE'); // Was it called with 'APPLE'?
    expect(mockCallback).toHaveBeenCalledWith('BANANA'); // Was it called with 'BANANA'?
    expect(mockCallback.mock.calls[0][0]).toBe('APPLE'); // Check first argument of first call
  });
});

// Mocking return values
const mockFetch = vi.fn();
mockFetch.mockResolvedValue({ ok: true, json: async () => ({ id: 1 }) }); // Mock async return
// await mockFetch('/api/user'); // Call the mock