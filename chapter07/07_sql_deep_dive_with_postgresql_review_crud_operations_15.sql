// Snippet 15 from Chapter 7
// Section: SQL Deep Dive with PostgreSQL
// Subsection: Review CRUD Operations
// Language: sql
// Description: -- Select specific columns from all rows in 'produ...
// 
-- Select specific columns from all rows in 'products'
SELECT name, price FROM products;

-- Select all columns (*) from 'users' matching a condition
SELECT * FROM users WHERE username = 'alice';

-- Select users created within the last week, order by creation date
SELECT id, username, email
FROM users
WHERE created_at >= NOW() - INTERVAL '7 day'
ORDER BY created_at DESC;