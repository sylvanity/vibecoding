// Snippet 05 from Chapter 8
// Section: Mocking Dependencies
// Subsection: Mocking API Calls (\texttt{fetch
// Source: Testing Your Application/Mocking Dependencies.tex (line 172)
// Language: ts
// Description: const mockEq = vi.fn().mockResolvedValue({ data: [...
// 
// Highly simplified - real implementation is more complex
const mockEq = vi.fn().mockResolvedValue({ data: [{id: 1, name: 'Mock'}], error: null });
const mockSelect = vi.fn(() => ({ eq: mockEq }));
const mockFrom = vi.fn(() => ({ select: mockSelect }));
const mockSupabaseClient = {
  from: mockFrom,
  // ... mock other methods like auth, rpc etc. if needed
};

// Use this mock client in your tests, potentially via mocking the module
// where the real client is created/exported.