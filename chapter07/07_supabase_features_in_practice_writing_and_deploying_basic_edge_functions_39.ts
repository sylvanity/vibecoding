// Snippet 39 from Chapter 7
// Section: Supabase Features in Practice
// Subsection: Writing and Deploying Basic Edge Functions
// Language: typescript
// Description: import { serve } from "https://deno.land/std@0.168...
// 
// supabase/functions/hello-world/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

console.log("Hello World function started.");

serve(async (req: Request) => {
  try {
    // Try to get name from JSON body
    let name = "World";
    try {
        const { name: bodyName } = await req.json();
        if (bodyName) name = bodyName;
    } catch {
        // Ignore parsing error if no body or not JSON
    }

    // Alternatively, check query params (e.g., /hello-world?name=You)
    const url = new URL(req.url);
    const queryName = url.searchParams.get("name");
    if (queryName) name = queryName;


    const data = {
      message: `Hello, ${name}!`,
    };

    return new Response(
      JSON.stringify(data),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
});