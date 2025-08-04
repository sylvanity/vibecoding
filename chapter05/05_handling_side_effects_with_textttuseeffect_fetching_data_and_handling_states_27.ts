// Snippet 27 from Chapter 5
// Section: Handling Side Effects with \texttt{useEffect
// Subsection: Fetching Data and Handling States
// Source: Building User Interfaces with React/Handling Side Effects with useEffect.tex (line 134)
// Language: typescript
// Description: import React, { useState, useEffect } from 'react'...
// 
import React, { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

function PostViewer({ postId }: { postId: number }): JSX.Element {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Effect logic for fetching data based on postId
    console.log(`Fetching post ${postId}`);
    setLoading(true); // Start loading
    setError(null);   // Clear previous errors
    setPost(null);    // Clear previous post

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => {
        if (!response.ok) {
          // Throw an error if response is not OK
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse JSON data
      })
      .then((data: Post) => {
        setPost(data); // Update state with fetched data
      })
      .catch((err: Error) => {
  // Handle any errors during fetch or parsing
  console.error('Fetch error:', err);
  setError(err.message || "Failed to fetch post");
})
      .finally(() => {
        // Ensure loading is set to false regardless of outcome
        setLoading(false);
      });

  }, [postId]); // Dependency array: re-run effect if postId changes

  // Render UI based on loading/error/data states
  if (loading) {
    return <p>Loading post...</p>;
  }
  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }
  // Check if post data exists before rendering
  if (!post) {
      return <p>No post data.</p>;
  }

  // Render the fetched post data
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default PostViewer;