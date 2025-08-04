// Snippet 14 from Chapter 9
// Section: Advanced Authorization with RLS
// Subsection: Advanced Policy Examples
// Language: sql
// Description: -- Assume a 'documents' table and a 'user_roles' t...
// 
-- Assume a 'documents' table and a 'user_roles' table (user_id, role)
-- Example: Allow users with 'editor' or 'admin' role to update any document,
-- but regular users can only update their own documents (if applicable).

-- First, ensure basic select access (e.g., based on document status or ownership)
CREATE POLICY select_documents ON documents FOR SELECT USING (true); -- Example: Allow select for all authenticated

-- Update policy based on role
CREATE POLICY update_documents ON documents
  FOR UPDATE
  USING (
    -- Check if user is an editor/admin OR owns the document (assuming an owner_id column)
    (EXISTS (SELECT 1 FROM user_roles WHERE user_roles.user_id = auth.uid() AND user_roles.role IN ('editor', 'admin')))
    OR
    (auth.uid() = owner_id)
  )
  WITH CHECK (
    -- Check permission again for the data being written
    (EXISTS (SELECT 1 FROM user_roles WHERE user_roles.user_id = auth.uid() AND user_roles.role IN ('editor', 'admin')))
    OR
    (auth.uid() = owner_id)
    -- Potentially add other checks, e.g., ensure owner_id isn't changed by non-admins
  );