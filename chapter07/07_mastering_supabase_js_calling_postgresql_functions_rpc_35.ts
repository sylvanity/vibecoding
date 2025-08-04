// Snippet 35 from Chapter 7
// Section: Mastering supabase-js
// Subsection: Calling PostgreSQL Functions (rpc())
// Language: typescript
// Description: async function fetchUserOrderCount(userId: number)...
// 
// Assume a PostgreSQL function exists:
// CREATE FUNCTION get_user_order_count(user_id_param int)
// RETURNS int LANGUAGE sql AS $$
//   SELECT COUNT(*) FROM orders WHERE user_id = user_id_param;
// $$;

async function fetchUserOrderCount(userId: number) {
  const { data, error } = await supabase
    .rpc('get_user_order_count', { // Function name
      user_id_param: userId        // Arguments object (keys match function param names)
    });

  if (error) {
    console.error('RPC error:', error);
    return null;
  }
  console.log(`User ${userId} has ${data} orders.`);
  return data; // 'data' contains the return value of the function
}