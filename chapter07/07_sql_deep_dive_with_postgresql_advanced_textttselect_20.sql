// Snippet 20 from Chapter 7
// Section: SQL Deep Dive with PostgreSQL
// Subsection: Advanced \texttt{SELECT
// Source: Backend Interaction (REST APIs and Supabase_SQL)/SQL Deep Dive with PostgreSQL.tex (line 111)
// Language: sql
// Description: SELECT
// 
SELECT
  name,
  price,
  CASE
    WHEN price > 100 THEN 'Expensive'
    WHEN price > 50 THEN 'Moderate'
    ELSE 'Affordable'
  END AS price_category -- Creates a new calculated column
FROM products;