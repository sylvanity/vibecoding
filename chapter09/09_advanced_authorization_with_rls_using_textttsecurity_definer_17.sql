// Snippet 17 from Chapter 9
// Section: Advanced Authorization with RLS
// Subsection: Using \texttt{SECURITY DEFINER
// Source: Security/Advanced Authorization with RLS.tex (line 170)
// Language: sql
// Description: -- Function to check if a user has a specific role...
// 
-- Function to check if a user has a specific role (executes as owner)
CREATE FUNCTION check_user_role(user_uuid uuid, required_role text)
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER -- Executes with definer's privileges
-- IMPORTANT: Set search_path to prevent hijacking
SET search_path = pg_catalog, public;
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM user_roles -- Assuming user_roles table is in 'public'
    WHERE user_roles.user_id = user_uuid AND user_roles.role = required_role
  );
$$;

-- Grant execute permission ONLY to roles that need it in policies
GRANT EXECUTE ON FUNCTION check_user_role(uuid, text) TO authenticated;

-- Example RLS policy using the function
CREATE POLICY admin_can_update ON some_table
  FOR UPDATE
  USING ( check_user_role(auth.uid(), 'admin') );