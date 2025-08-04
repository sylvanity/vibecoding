// Snippet 11 from Chapter 7
// Section: Advanced Data Fetching with React Query
// Subsection: Best Practices and Gotchas
// Language: typescript
// Description: const userQuery = useQuery({
// 
// Transform data at query level
const userQuery = useQuery({
  queryKey: ['user', userId],
  queryFn: () => fetchUser(userId),
  select: (user) => ({
    ...user,
    displayName: user.firstName + ' ' + user.lastName,
    isActive: user.lastLogin > Date.now() - 7 * 24 * 60 * 60 * 1000,
  }),
});