// Snippet 24 from Chapter 7
// Section: SQL Deep Dive with PostgreSQL
// Subsection: Introduction to Window Functions
// Language: sql
// Description: -- Assign a rank to products within each category ...
// 
-- Assign a rank to products within each category based on price (highest price = rank 1)
SELECT
  name,
  category,
  price,
  ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) AS rank_in_category
FROM products;