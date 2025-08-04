// Snippet 47 from Chapter 7
// Section: Advanced SQL: Joins and Data Modeling
// Subsection: Joining Multiple Tables
// Language: sql
// Description: -- Select username, order date, product name, and ...
// 
-- Select username, order date, product name, and quantity for all order items
SELECT
  u.username,
  o.order_date,
  p.name AS product_name,
  oi.quantity
FROM users u
INNER JOIN orders o ON u.id = o.user_id -- Join users and orders
INNER JOIN order_items oi ON o.id = oi.order_id -- Join result with order_items
INNER JOIN products p ON oi.product_id = p.id; -- Join result with products