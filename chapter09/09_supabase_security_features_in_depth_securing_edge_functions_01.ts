// Snippet 01 from Chapter 9
// Section: Supabase Security Features In-Depth
// Subsection: Securing Edge Functions
// Language: typescript
// Description: import { createClient } from '@supabase/supabase-j...
// 
import { createClient } from '@supabase/supabase-js';
import { serve } from 'https://deno.land/std/http/server.ts';

serve(async (req) => {
  // Create Supabase client specific to this function invocation
  const supabaseClient = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    // Pass the Authorization header from the incoming request
    { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
  );

  // Get user details from the JWT
  const { data: { user }, error } = await supabaseClient.auth.getUser();

  if (error || !user) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  // User is authenticated, proceed with logic using user.id, user.role etc.
  console.log('Function invoked by user:', user.id);
  // ... rest of the function logic ...
  return new Response(JSON.stringify({ message: `Hello user ${user.id}` }));
});