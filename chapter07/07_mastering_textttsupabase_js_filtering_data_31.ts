// Snippet 31 from Chapter 7
// Section: Mastering \texttt{supabase-js
// Subsection: Filtering Data
// Source: Backend Interaction (REST APIs and Supabase_SQL)/Mastering `supabase-js` Client.tex (line 106)
// Language: typescript
// Description: async function findProducts(searchTerm: string) {
// 
async function findProducts(searchTerm: string) {
  const { data, error } = await supabase
    .from('products')
    .select('name, price, category')
    // Find products with name containing searchTerm (case-insensitive)
    // AND price greater than 20
    // AND category is either 'Electronics' or 'Accessories'
    .ilike('name', `%${searchTerm}%`)
    .gt('price', 20)
    .in('category', ['Electronics', 'Accessories']);

  if (error) console.error('Filter error:', error);
  return data;
}

async function findUsersWithOr() {
    const { data, error } = await supabase
      .from('users')
      .select('username, status')
      // Find users where status is 'active' OR username starts with 'test_'
      .or('status.eq.active,username.like.test_%');

    if (error) console.error('OR filter error:', error);
    return data;
}