// Snippet 18 from Chapter 7
// Section: SQL Deep Dive with PostgreSQL
// Subsection: Advanced SELECT
// Language: sql
// Description: SELECT
// 
SELECT
  u.username AS user_name, -- Column alias
  o.id AS order_id,
  o.order_date
FROM
  users AS u -- Table alias
JOIN
  orders AS o ON u.id = o.user_id
WHERE
  u.id = 1;