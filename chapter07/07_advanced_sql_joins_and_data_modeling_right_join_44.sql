// Snippet 44 from Chapter 7
// Section: Advanced SQL: Joins and Data Modeling
// Subsection: RIGHT JOIN
// Language: sql
// Description: -- Select all orders and their corresponding user'...
// 
-- Select all orders and their corresponding user's username, if any
SELECT
  u.username, -- This will be NULL if an order has an invalid user\_id
  o.order_date
FROM users u
RIGHT JOIN orders o ON u.id = o.user_id;
-- All orders will appear.