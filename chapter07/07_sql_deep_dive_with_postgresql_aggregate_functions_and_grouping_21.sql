// Snippet 21 from Chapter 7
// Section: SQL Deep Dive with PostgreSQL
// Subsection: Aggregate Functions and Grouping
// Language: sql
// Description: -- Count the number of users
// 
-- Count the number of users
SELECT COUNT(*) FROM users;

-- Calculate the average price of products in each category
SELECT
  category,
  AVG(price) AS average_price,
  COUNT(*) AS number_of_products
FROM products
GROUP BY category;

-- Find categories with more than 5 products, showing average price
SELECT
  category,
  AVG(price) AS average_price
FROM products
GROUP BY category
HAVING COUNT(*) > 5 -- Filter groups based on aggregate result
ORDER BY average_price DESC;