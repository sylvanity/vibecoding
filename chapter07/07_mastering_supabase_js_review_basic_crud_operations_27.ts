// Snippet 27 from Chapter 7
// Section: Mastering supabase-js
// Subsection: Review Basic CRUD Operations
// Language: typescript
// Description: async function addProduct(productData: NewProduct)...
// 
// Assuming 'supabase' client is initialized
// Assuming type 'NewProduct' is defined { name: string; price: number; }
async function addProduct(productData: NewProduct) {
  const { data, error } = await supabase
    .from('products') // Specify the table
    .insert([ // Pass an array of objects to insert
      productData
    ])
    .select(); // Optionally select the inserted data

  if (error) {
    console.error('Error inserting product:', error);
    return null;
  }
  console.log('Inserted product:', data);
  return data;
}