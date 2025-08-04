// Snippet 15 from Chapter 9
// Section: Advanced Authorization with RLS
// Subsection: Advanced Policy Examples
// Language: sql
// Description: -- Assume a 'promotions' table with 'start_date' a...
// 
-- Assume a 'promotions' table with 'start_date' and 'end_date' columns
-- Allow users to see promotions only when they are active

CREATE POLICY select_active_promotions ON promotions
  FOR SELECT
  USING (
    NOW() >= start_date AND NOW() < end_date
  );