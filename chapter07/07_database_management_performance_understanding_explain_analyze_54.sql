// Snippet 54 from Chapter 7
// Section: Database Management \& Performance
// Subsection: Understanding EXPLAIN ANALYZE
// Language: sql
// Description: EXPLAIN ANALYZE
// 
EXPLAIN ANALYZE
SELECT u.username, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at > '2024-01-01'
GROUP BY u.username
ORDER BY order_count DESC;