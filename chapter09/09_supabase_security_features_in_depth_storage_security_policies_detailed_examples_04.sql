// Snippet 04 from Chapter 9
// Section: Supabase Security Features In-Depth
// Subsection: Storage Security Policies Detailed Examples
// Language: sql
// Description: -- Policy on storage.objects table
// 
-- Policy on storage.objects table
CREATE POLICY "Allow upload to own folder" ON storage.objects
  FOR INSERT
  WITH CHECK (
    auth.role() = 'authenticated'
    AND bucket_id = 'user_data'
    -- Check if the path starts with the user's UUID
    -- Note: 'name' column stores the path within the bucket
    AND name LIKE auth.uid() || '/%'
  );