// Snippet 09 from Chapter 7
// Section: Advanced Data Fetching with React Query
// Subsection: Advanced Patterns
// Language: typescript
// Description: function UserList() {
// 
function UserList() {
  const queryClient = useQueryClient();
  
  const prefetchUser = (userId: string) => {
    queryClient.prefetchQuery({
      queryKey: ['user', userId],
      queryFn: () => fetchUser(userId),
      staleTime: 5 * 60 * 1000, // 5 minutes
    });
  };

  return (
    <div>
      {users.map(user => (
        <Link
          key={user.id}
          to={`/users/${user.id}`}
          onMouseEnter={() => prefetchUser(user.id)}
        >
          {user.name}
        </Link>
      ))}
    </div>
  );
}