// Snippet 09 from Chapter 8
// Section: Unit Testing
// Subsection: Testing Pure Functions (TypeScript Utilities)
// Language: typescript
// Description: import { add, formatUsername } from './math';
// 
// Import the functions to test
import { add, formatUsername } from './math';
// Import testing functions from Vitest or Jest
import { describe, it, expect } from 'vitest'; // or from '@jest/globals'

// Group related tests with describe
describe('math utility functions', () => {

  // Test case for the add function
  it('should add two numbers correctly', () => {
    // Arrange: Define inputs
    const num1 = 5;
    const num2 = 10;
    const expectedResult = 15;

    // Act: Call the function
    const result = add(num1, num2);

    // Assert: Check if the result matches the expectation
    expect(result).toBe(expectedResult); // Use a matcher like 'toBe'
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  // Test case for the formatUsername function
  it('should format username correctly', () => {
    expect(formatUsername("  Alice  ")).toBe("alice");
    expect(formatUsername("BOB")).toBe("bob");
  });

  it('should return "Guest" for empty or nullish username', () => {
    expect(formatUsername("")).toBe("Guest");
    // Depending on setup, might need to handle null/undefined explicitly if TS prevents them
    // expect(formatUsername(null)).toBe("Guest");
    // expect(formatUsername(undefined)).toBe("Guest");
  });

});