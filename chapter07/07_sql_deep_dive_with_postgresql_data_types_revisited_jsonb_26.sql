// Snippet 26 from Chapter 7
// Section: SQL Deep Dive with PostgreSQL
// Subsection: Data Types Revisited (jsonb)
// Language: sql
// Description: -- Assuming a 'posts' table with a 'tags' text[] c...
// 
-- Assuming a 'posts' table with a 'tags' text[] column
-- tags might look like: {'sql', 'postgres', 'tutorial'}

-- Get the first tag
SELECT tags[1] FROM posts WHERE id = 1; -- Returns 'sql'

-- Find posts tagged with 'postgres'
SELECT * FROM posts WHERE 'postgres' = ANY(tags);
-- Alternative using contains operator:
SELECT * FROM posts WHERE tags @> ARRAY['postgres'];

-- Find posts that have *both* 'sql' and 'postgres' tags
SELECT * FROM posts WHERE tags @> ARRAY['sql', 'postgres'];

-- Expand tags into separate rows
SELECT id, unnest(tags) AS tag FROM posts;