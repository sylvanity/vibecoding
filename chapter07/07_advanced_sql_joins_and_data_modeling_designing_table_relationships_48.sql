// Snippet 48 from Chapter 7
// Section: Advanced SQL: Joins and Data Modeling
// Subsection: Designing Table Relationships
// Language: sql
// Description: CREATE TABLE posts (
// 
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL
);

CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL
);

CREATE TABLE post_tags (
  post_id INT REFERENCES posts(id) ON DELETE CASCADE,
  tag_id INT REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id) -- Composite primary key
);