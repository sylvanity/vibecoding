// Snippet 34 from Chapter 7
// Section: Mastering supabase-js
// Subsection: Selecting Specific Columns and Embedding Foreign Tables
// Language: typescript
// Description: async function getOrderDetails(orderId: number) {
// 
// Assume 'orders' table has a foreign key 'user_id' referencing 'users.id'
// Assume 'order_items' has 'order_id' FK referencing 'orders.id' and 'product_id' FK referencing 'products.id'

async function getOrderDetails(orderId: number) {
  const { data, error } = await supabase
    .from('orders')
    .select(`
      id,
      order_date,
      user:users ( id, username, email ),  /* Embed user details (based on user_id FK) */
      items:order_items (               /* Embed order items (based on order_id FK) */
        quantity,
        product:products ( name, price ) /* Embed product details within items */
      )
    `)
    .eq('id', orderId) // Filter for the specific order
    .single(); // Use single() if you expect only one result

  if (error) console.error('Select/Embed error:', error);
  // 'data' will be an object with nested 'user' and 'items' (array with nested 'product')
  return data;
}