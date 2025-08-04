// Snippet 10 from Chapter 7
// Section: Advanced Data Fetching with React Query
// Subsection: Best Practices and Gotchas
// Language: typescript
// Description: ['user', userId]
// 
// Good: Stable, descriptive keys
['user', userId]
['posts', { category: 'tech', page: 1 }]
['userPosts', userId, { status: 'published' }]

// Avoid: Unstable keys
['user', Date.now()] // Changes every render
['posts', Math.random()] // Unpredictable