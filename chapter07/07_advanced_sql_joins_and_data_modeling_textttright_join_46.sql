// Snippet 46 from Chapter 7
// Section: Advanced SQL: Joins and Data Modeling
// Subsection: \texttt{RIGHT JOIN
// Source: Backend Interaction (REST APIs and Supabase_SQL)/Advanced SQL_ Joins and Data Modeling.tex (line 83)
// Language: sql
// Description: -- Combine every user with every product (potentia...
// 
-- Combine every user with every product (potentially a very large result!)
SELECT u.username, p.name
FROM users u
CROSS JOIN products p;