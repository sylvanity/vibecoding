// Snippet 45 from Chapter 7
// Section: Advanced SQL: Joins and Data Modeling
// Subsection: \texttt{RIGHT JOIN
// Source: Backend Interaction (REST APIs and Supabase_SQL)/Advanced SQL_ Joins and Data Modeling.tex (line 70)
// Language: sql
// Description: -- Select all users and all orders, matching them ...
// 
-- Select all users and all orders, matching them where possible
SELECT
  u.username,
  o.order_date
FROM users u
FULL OUTER JOIN orders o ON u.id = o.user_id;
-- Includes users with no orders (order\_date is NULL)
-- Includes orders with no matching user (username is NULL)