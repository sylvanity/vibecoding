// Snippet 42 from Chapter 7
// Section: Advanced SQL: Joins and Data Modeling
// Subsection: Review \texttt{INNER
// Source: Backend Interaction (REST APIs and Supabase_SQL)/Advanced SQL_ Joins and Data Modeling.tex (line 27)
// Language: sql
// Description: -- Select users and their corresponding order date...
// 
-- Select users and their corresponding order dates
SELECT
  u.username,
  o.order_date
FROM users u
INNER JOIN orders o ON u.id = o.user_id;
-- Only users who have placed at least one order will appear.