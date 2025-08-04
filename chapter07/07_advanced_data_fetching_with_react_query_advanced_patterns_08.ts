// Snippet 08 from Chapter 7
// Section: Advanced Data Fetching with React Query
// Subsection: Advanced Patterns
// Language: typescript
// Description: interface Post {
// 
interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

interface PostsPage {
  posts: Post[];
  nextCursor?: string;
  hasMore: boolean;
}

async function fetchPosts(cursor?: string): Promise<PostsPage> {
  const response = await fetch(`/api/posts?cursor=${cursor || ''}`);
  return response.json();
}

function PostsList() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam }) => fetchPosts(pageParam),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: undefined,
  });

  if (isLoading) return <PostsSkeleton />;
  if (isError) return <ErrorMessage />;

  const allPosts = data?.pages.flatMap(page => page.posts) ?? [];

  return (
    <div>
      {allPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
      
      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
}