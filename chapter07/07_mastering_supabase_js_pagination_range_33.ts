// Snippet 33 from Chapter 7
// Section: Mastering supabase-js
// Subsection: Pagination (range())
// Language: typescript
// Description: async function getPaginatedUsers(page: number, pag...
// 
async function getPaginatedUsers(page: number, pageSize: number) {
  const startIndex = (page - 1) * pageSize; // Calculate starting index (0-based)
  const endIndex = startIndex + pageSize - 1; // Calculate ending index

  const { data, error, count } = await supabase
    .from('users')
    .select('id, username', { count: 'exact' }) // Request total count for pagination UI
    .range(startIndex, endIndex)
    .order('created_at', { ascending: false });

  if (error) console.error('Pagination error:', error);

  console.log('Total users:', count); // Total matching rows (ignoring range)
  return { data, count };
}

// Example usage: Get page 2 with 10 users per page
// getPaginatedUsers(2, 10); // Fetches rows 10 through 19