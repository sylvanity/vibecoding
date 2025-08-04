// Snippet 43 from Chapter 7
// Section: Advanced SQL: Joins and Data Modeling
// Subsection: Review INNER
// Language: sql
// Description: -- Select ALL users and their order dates, if any
// 
-- Select ALL users and their order dates, if any
SELECT
  u.username,
  o.order_date -- This will be NULL if a user has no orders
FROM users u
LEFT JOIN orders o ON u.id = o.user_id;
-- All users will appear, regardless of whether they have placed orders.