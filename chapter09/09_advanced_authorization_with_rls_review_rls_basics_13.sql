// Snippet 13 from Chapter 9
// Section: Advanced Authorization with RLS
// Subsection: Review RLS Basics
// Language: sql
// Description: -- Enable RLS on the 'profiles' table
// 
-- Enable RLS on the 'profiles' table
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only select their own profile
CREATE POLICY select_own_profile ON profiles
  FOR SELECT
  USING ( auth.uid() = user_id ); -- Assumes 'profiles' has a 'user_id' column matching auth UUID

-- Policy: Users can only insert a profile for themselves
CREATE POLICY insert_own_profile ON profiles
  FOR INSERT
  WITH CHECK ( auth.uid() = user_id );

-- Policy: Users can only update their own profile
CREATE POLICY update_own_profile ON profiles
  FOR UPDATE
  USING ( auth.uid() = user_id ) -- Check existing row ownership
  WITH CHECK ( auth.uid() = user_id ); -- Ensure they don't change user_id

-- Policy: Users can only delete their own profile
CREATE POLICY delete_own_profile ON profiles
  FOR DELETE
  USING ( auth.uid() = user_id );