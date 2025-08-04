// Snippet 29 from Chapter 7
// Section: Mastering \texttt{supabase-js
// Subsection: Review Basic CRUD Operations
// Source: Backend Interaction (REST APIs and Supabase_SQL)/Mastering `supabase-js` Client.tex (line 61)
// Language: typescript
// Description: async function updateUserEmail(userId: number, new...
// 
async function updateUserEmail(userId: number, newEmail: string) {
  const { data, error } = await supabase
    .from('users')
    .update({ email: newEmail, updated_at: new Date() }) // Object with columns to update
    .eq('id', userId) // Filter: update only where id equals userId
    .select(); // Optionally select the updated data

  if (error) {
    console.error('Error updating user:', error);
    return null;
  }
  console.log('Updated user:', data);
  return data;
}