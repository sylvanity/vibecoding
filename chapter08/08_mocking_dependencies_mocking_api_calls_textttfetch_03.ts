// Snippet 03 from Chapter 8
// Section: Mocking Dependencies
// Subsection: Mocking API Calls (\texttt{fetch
// Source: Testing Your Application/Mocking Dependencies.tex (line 130)
// Language: ts
// Description: global.fetch = vi.fn().mockResolvedValue({
// 
// In test setup or specific test
global.fetch = vi.fn().mockResolvedValue({
  ok: true,
  json: async () => ({ message: 'Success!' }),
});

// Your component/function using fetch will now use the mock
// await fetch('/api/data');

// Assertions
expect(global.fetch).toHaveBeenCalledWith('/api/data');