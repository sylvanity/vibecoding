// Snippet 05 from Chapter 9
// Section: Supabase Security Features In-Depth
// Subsection: Storage Security Policies Detailed Examples
// Language: sql
// Description: -- Policy on storage.objects table
// 
-- Policy on storage.objects table
CREATE POLICY "Allow access to own files" ON storage.objects
  FOR SELECT, UPDATE, DELETE -- Apply to multiple commands
  USING (
    auth.role() = 'authenticated'
    AND bucket_id = 'user_data'
    AND name LIKE auth.uid() || '/%'
  );