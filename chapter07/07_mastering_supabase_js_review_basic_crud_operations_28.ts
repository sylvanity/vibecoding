// Snippet 28 from Chapter 7
// Section: Mastering supabase-js
// Subsection: Review Basic CRUD Operations
// Language: typescript
// Description: async function getAllUsers() {
// 
async function getAllUsers() {
  const { data: users, error } = await supabase
    .from('users') // Specify the table
    .select('*'); // Select all columns

  if (error) {
    console.error('Error fetching users:', error);
    return [];
  }
  console.log('Fetched users:', users);
  return users;
}