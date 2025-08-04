// Snippet 19 from Chapter 7
// Section: SQL Deep Dive with PostgreSQL
// Subsection: Advanced \texttt{SELECT
// Source: Backend Interaction (REST APIs and Supabase_SQL)/SQL Deep Dive with PostgreSQL.tex (line 104)
// Language: sql
// Description: -- Get a list of unique categories from the produc...
// 
-- Get a list of unique categories from the products table
SELECT DISTINCT category FROM products;