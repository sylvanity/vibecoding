// Snippet 16 from Chapter 7
// Section: SQL Deep Dive with PostgreSQL
// Subsection: Review CRUD Operations
// Language: sql
// Description: -- Update the price of a specific product
// 
-- Update the price of a specific product
UPDATE products
SET price = 55.00
WHERE name = 'Laptop Stand';

-- Update multiple columns for users matching a condition
UPDATE users
SET email = 'new_alice@example.com', updated_at = NOW()
WHERE username = 'alice';