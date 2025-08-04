// Snippet 06 from Chapter 9
// Section: Securing API Interactions
// Subsection: Input Validation at the API Layer
// Language: typescript
// Description: import { z } from 'https://deno.land/x/zod/mod.ts'...
// 
// Inside a Supabase Edge Function (index.ts)
import { z } from 'https://deno.land/x/zod/mod.ts'; // Example using Zod

// Define the expected schema for the request body
const RequestSchema = z.object({
  productId: z.number().int().positive(),
  quantity: z.number().int().min(1).max(10),
  notes: z.string().max(255).optional(), // Optional string, max length
});

serve(async (req: Request) => {
  if (req.method !== 'POST') {
    return new Response("Method Not Allowed", { status: 405 });
  }

  let inputData;
  try {
      inputData = await req.json();
  } catch {
      return new Response("Invalid JSON body", { status: 400 });
  }

  // Validate the input against the schema
  const validationResult = RequestSchema.safeParse(inputData);

  if (!validationResult.success) {
    // Validation failed, return detailed errors
    return new Response(JSON.stringify({ error: "Invalid input", issues: validationResult.error.issues }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Validation passed - proceed with validated data
  const { productId, quantity, notes } = validationResult.data;
  console.log(`Processing order for product ${productId}, quantity ${quantity}`);
  // ... rest of the secure logic using validated data ...

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
});