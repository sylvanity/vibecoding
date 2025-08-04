// Snippet 06 from Chapter 7
// Section: Advanced Data Fetching with React Query
// Subsection: Practical Implementation
// Language: typescript
// Description: const userQuery = useQuery({
// 
const userQuery = useQuery({
  queryKey: ['user', userId],
  queryFn: () => fetchUser(userId),
  retry: (failureCount, error) => {
    // Don't retry on 404 errors
    if (error.status === 404) return false;
    // Retry up to 3 times for other errors
    return failureCount < 3;
  },
  retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  onError: (error) => {
    console.error('Failed to fetch user:', error);
    // Log to error tracking service
    logError('user_fetch_error', error);
  },
});