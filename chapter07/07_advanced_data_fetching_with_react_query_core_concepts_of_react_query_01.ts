// Snippet 01 from Chapter 7
// Section: Advanced Data Fetching with React Query
// Subsection: Core Concepts of React Query
// Language: typescript
// Description: const userQuery = useQuery({
// 
// Simple query key
const userQuery = useQuery({
  queryKey: ['user', userId],
  queryFn: () => fetchUser(userId)
});

// Complex query key with filters
const postsQuery = useQuery({
  queryKey: ['posts', { category: 'tech', page: 1, limit: 10 }],
  queryFn: () => fetchPosts({ category: 'tech', page: 1, limit: 10 })
});