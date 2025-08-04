// Snippet 05 from Chapter 7
// Section: Advanced Data Fetching with React Query
// Subsection: Practical Implementation
// Language: typescript
// Description: interface User {
// 
interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface UserProfile {
  user: User;
  posts: Post[];
  followers: number;
  following: number;
}

async function fetchUserProfile(userId: string): Promise<UserProfile> {
  const response = await fetch(`/api/users/${userId}/profile`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user profile: ${response.statusText}`);
  }
  return response.json();
}

function UserProfilePage({ userId }: { userId: string }) {
  const { data: profile, isLoading, isError, error } = useQuery({
    queryKey: ['userProfile', userId],
    queryFn: () => fetchUserProfile(userId),
    enabled: !!userId, // Only run query if userId exists
  });

  if (isLoading) {
    return <UserProfileSkeleton />;
  }

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  if (!profile) {
    return <div>No profile found</div>;
  }

  return (
    <div className="user-profile">
      <UserHeader user={profile.user} />
      <UserStats followers={profile.followers} following={profile.following} />
      <UserPosts posts={profile.posts} />
    </div>
  );
}