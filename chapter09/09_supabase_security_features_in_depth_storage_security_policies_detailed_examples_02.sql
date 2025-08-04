// Snippet 02 from Chapter 9
// Section: Supabase Security Features In-Depth
// Subsection: Storage Security Policies Detailed Examples
// Language: sql
// Description: -- Policy on storage.objects table
// 
-- Policy on storage.objects table
CREATE POLICY "Allow public read access" ON storage.objects
  FOR SELECT
  USING ( bucket_id = 'public\_avatars' ); -- Allow SELECT for specific bucket