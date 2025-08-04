// Snippet 14 from Chapter 7
// Section: SQL Deep Dive with PostgreSQL
// Subsection: Review CRUD Operations
// Language: sql
// Description: -- Insert a single row into the 'users' table
// 
-- Insert a single row into the 'users' table
INSERT INTO users (username, email, created_at)
VALUES ('alice', 'alice@example.com', NOW());

-- Insert multiple rows
INSERT INTO products (name, price, category) VALUES
  ('Laptop Stand', 49.99, 'Accessories'),
  ('Wireless Mouse', 25.50, 'Accessories');