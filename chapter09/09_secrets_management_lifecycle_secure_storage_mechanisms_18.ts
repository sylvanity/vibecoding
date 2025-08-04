// Snippet 18 from Chapter 9
// Section: Secrets Management Lifecycle
// Subsection: Secure Storage Mechanisms
// Language: typescript
// Description: const apiKey = Deno.env.get("MY_THIRD_PARTY_API_KE...
// 
// Access the secret as an environment variable
        const apiKey = Deno.env.get("MY_THIRD_PARTY_API_KEY");
        if (!apiKey) {
          throw new Error("Missing API Key secret!");
        }
        // Use the apiKey securely...