// Snippet 22 from Chapter 7
// Section: SQL Deep Dive with PostgreSQL
// Subsection: Subqueries
// Language: sql
// Description: -- Find users who have placed orders (using IN wit...
// 
-- Find users who have placed orders (using IN with subquery)
SELECT username FROM users
WHERE id IN (SELECT DISTINCT user_id FROM orders);

-- Find products more expensive than the average price of all products (Scalar subquery in WHERE)
SELECT name, price
FROM products
WHERE price > (SELECT AVG(price) FROM products);

-- Select user details along with their total order count (Scalar subquery in SELECT)
SELECT
  u.username,
  (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS total_orders
FROM users u;

-- Using a subquery in the FROM clause (Derived Table)
SELECT category_avg.category, category_avg.avg_price
FROM (
    SELECT category, AVG(price) as avg_price
    FROM products
    GROUP BY category
) AS category_avg -- Alias is required
WHERE category_avg.avg_price > 50;