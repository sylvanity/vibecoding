// Snippet 32 from Chapter 7
// Section: Mastering \texttt{supabase-js
// Subsection: Ordering Results (\texttt{order()
// Source: Backend Interaction (REST APIs and Supabase_SQL)/Mastering `supabase-js` Client.tex (line 141)
// Language: typescript
// Description: async function getProductsSorted() {
// 
async function getProductsSorted() {
  const { data, error } = await supabase
    .from('products')
    .select('name, price')
    // Order by category ascending, then by price descending within each category
    .order('category', { ascending: true })
    .order('price', { ascending: false, nullsFirst: false }); // nullsFirst/nullsLast option

  if (error) console.error('Order error:', error);
  return data;
}