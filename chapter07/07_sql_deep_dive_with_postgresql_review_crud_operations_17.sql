// Snippet 17 from Chapter 7
// Section: SQL Deep Dive with PostgreSQL
// Subsection: Review CRUD Operations
// Language: sql
// Description: -- Delete a specific user by ID
// 
-- Delete a specific user by ID
DELETE FROM users
WHERE id = 123;

-- Delete all products in a specific category
DELETE FROM products
WHERE category = 'Obsolete';