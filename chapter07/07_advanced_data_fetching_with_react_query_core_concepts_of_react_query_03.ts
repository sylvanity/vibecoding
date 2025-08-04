// Snippet 03 from Chapter 7
// Section: Advanced Data Fetching with React Query
// Subsection: Core Concepts of React Query
// Language: typescript
// Description: function UserProfile({ userId }: { userId: string ...
// 
function UserProfile({ userId }: { userId: string }) {
  const { data: user, isLoading, isError, error } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId)
  });

  if (isLoading) return <div>Loading user profile...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  if (!user) return <div>No user found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}