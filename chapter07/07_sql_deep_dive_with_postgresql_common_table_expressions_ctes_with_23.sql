// Snippet 23 from Chapter 7
// Section: SQL Deep Dive with PostgreSQL
// Subsection: Common Table Expressions (CTEs - WITH)
// Language: sql
// Description: WITH RegionalSales AS (
// 
WITH RegionalSales AS (
  -- Define the CTE: Calculate total sales per region
  SELECT
    u.region,
    SUM(oi.quantity * oi.price) AS total_region_sales
  FROM users u
  JOIN orders o ON u.id = o.user_id
  JOIN order_items oi ON o.id = oi.order_id
  GROUP BY u.region
),
AverageSales AS (
  -- Define another CTE: Calculate overall average sales
  SELECT AVG(total_region_sales) as avg_sales FROM RegionalSales
)
-- Main query referencing the CTEs
SELECT
  rs.region,
  rs.total_region_sales
FROM RegionalSales rs
JOIN AverageSales avs ON 1=1 -- Join condition always true to get avg_sales on each row
WHERE rs.total_region_sales > avs.avg_sales -- Find regions above average
ORDER BY rs.total_region_sales DESC;