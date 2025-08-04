// Snippet 16 from Chapter 9
// Section: Advanced Authorization with RLS
// Subsection: Advanced Policy Examples
// Language: sql
// Description: -- Assume a 'projects' table with an 'organization...
// 
-- Assume a 'projects' table with an 'organization_id' column
-- Assume JWT contains claim: app_metadata -> organization_id

CREATE POLICY select_organization_projects ON projects
  FOR SELECT
  USING (
    -- Use Supabase helper function to get claim (check exact function name in docs)
    (auth.jwt() -> 'app_metadata' ->> 'organization_id')::int = organization_id
  );