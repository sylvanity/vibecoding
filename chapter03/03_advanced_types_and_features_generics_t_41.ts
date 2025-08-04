// Snippet 41 from Chapter 3
// Section: Advanced Types and Features
// Subsection: Generics (<T>)
// Language: typescript
// Description: interface ApiResponse<D> {
// 
// An interface for a response object where the data type 'D' can vary
interface ApiResponse<D> {
  success: boolean;
  data?: D; // Data type depends on the generic parameter D
  error?: string;
}

// Usage:
let userResponse: ApiResponse<{ id: number; name: string }> = {
  success: true,
  data: { id: 1, name: "Alice" }
};

let errorResponse: ApiResponse<null> = { // Or ApiResponse<never>
  success: false,
  error: "Failed to fetch data"
};