// Snippet 46 from Chapter 7
// Section: Advanced SQL: Joins and Data Modeling
// Subsection: RIGHT JOIN
// Language: sql
// Description: -- Combine every user with every product (potentia...
// 
-- Combine every user with every product (potentially a very large result!)
SELECT u.username, p.name
FROM users u
CROSS JOIN products p;