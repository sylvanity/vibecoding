// Snippet 02 from Chapter 7
// Section: Advanced Data Fetching with React Query
// Subsection: Core Concepts of React Query
// Language: typescript
// Description: const userQuery = useQuery({
// 
const userQuery = useQuery({
  queryKey: ['user', userId],
  queryFn: () => fetchUser(userId),
  staleTime: 5 * 60 * 1000, // 5 minutes
  gcTime: 10 * 60 * 1000,   // 10 minutes (formerly cacheTime)
});