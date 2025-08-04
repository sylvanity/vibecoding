// Snippet 36 from Chapter 7
// Section: Mastering supabase-js
// Subsection: Error Handling Patterns
// Language: typescript
// Description: async function safeFetchUserData(userId: number) {
// 
async function safeFetchUserData(userId: number) {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('id, username, profile:profiles ( bio )') // Embed profile
      .eq('id', userId)
      .single(); // Expect single result or error

    if (error) {
      // Handle specific Supabase/PostgREST errors
      console.error(`Supabase error fetching user ${userId}:`, error.message);
      // You might check error.code here for specific issues (e.g., 'PGRST116' for no rows found with .single())
      return { success: false, message: error.message };
    }

    if (!data) {
      // Should ideally be caught by .single() error if no row found, but good practice
      console.warn(`No data found for user ${userId}`);
      return { success: false, message: 'User not found' };
    }

    // Safely access potentially nested data
    const bio = data.profile?.bio ?? 'No bio provided'; // Use optional chaining and nullish coalescing
    console.log(`User: ${data.username}, Bio: ${bio}`);
    return { success: true, user: data };

  } catch (syncError: unknown) {
    // Catch synchronous errors in the surrounding code
    console.error('Unexpected error:', syncError);
    return { success: false, message: 'An unexpected error occurred' };
  }
}