// Snippet 03 from Chapter 9
// Section: Supabase Security Features In-Depth
// Subsection: Storage Security Policies Detailed Examples
// Language: sql
// Description: -- Policy on storage.objects table
// 
-- Policy on storage.objects table
CREATE POLICY "Allow authenticated upload" ON storage.objects
  FOR INSERT
  WITH CHECK (
    auth.role() = 'authenticated' AND bucket_id = 'user_uploads'
  );