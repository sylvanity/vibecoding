// Snippet 30 from Chapter 7
// Section: Mastering supabase-js
// Subsection: Review Basic CRUD Operations
// Language: typescript
// Description: async function deleteInactiveUsers() {
// 
async function deleteInactiveUsers() {
  const { error } = await supabase
    .from('users')
    .delete()
    .eq('status', 'inactive'); // Filter: delete where status is inactive

  if (error) {
    console.error('Error deleting users:', error);
  } else {
    console.log('Inactive users deleted.');
  }
}