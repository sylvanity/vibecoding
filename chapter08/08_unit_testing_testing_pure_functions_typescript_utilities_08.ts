// Snippet 08 from Chapter 8
// Section: Unit Testing
// Subsection: Testing Pure Functions (TypeScript Utilities)
// Language: typescript
// Description: export function add(a: number, b: number): number ...
// 
// Simple function to test
export function add(a: number, b: number): number {
  return a + b;
}

export function formatUsername(name: string): string {
  if (!name) return "Guest";
  return name.trim().toLowerCase();
}