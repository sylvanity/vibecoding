// Snippet 37 from Chapter 7
// Section: Supabase Features in Practice
// Subsection: Realtime Subscriptions (Listening to DB Changes)
// Language: typescript
// Description: import React, { useState, useEffect } from 'react'...
// 
import React, { useState, useEffect } from 'react';
// Assume 'supabase' client is initialized elsewhere
// Assume 'Message' type is defined { id: number; text: string; created_at: string; }

function ChatMessages(): JSX.Element {
  const [messages, setMessages] = useState<Message[]>([]);

  // Fetch initial messages
  useEffect(() => {
    async function fetchInitialMessages() {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error("Error fetching initial messages:", error);
      } else if (data) {
        setMessages(data);
      }
    }
    fetchInitialMessages();
  }, []); // Run only on mount

  // Set up realtime subscription
  useEffect(() => {
    // Define the handler for new messages
    const handleNewMessage = (payload: any) => { // Use specific payload type if known
      console.log('New message received!', payload);
      // Add the new message to the state immutably
      setMessages(currentMessages => [...currentMessages, payload.new as Message]);
    };

    // Create a subscription channel
    const channel = supabase.channel('public:messages') // Channel name can be anything unique
      .on(
        'postgres_changes', // Listen to database changes
        {
          event: 'INSERT', // Specifically listen for INSERT events
          schema: 'public',
          table: 'messages'
          // You can add filters here, e.g., filter: 'room_id=eq.some_room_id'
        },
        handleNewMessage // Callback function when an INSERT occurs
      )
      .subscribe((status, err) => { // Optional: Callback on subscription status change
          if (status === 'SUBSCRIBED') {
              console.log('Realtime channel subscribed!');
          }
          if (status === 'CHANNEL_ERROR') {
              console.error('Realtime channel error:', err);
          }
      });

    // Cleanup function: Unsubscribe when component unmounts
    return () => {
      console.log('Unsubscribing from realtime channel');
      supabase.removeChannel(channel);
    };
  }, []); // Run only on mount

  return (
    <div>
      <h2>Live Messages</h2>
      <ul>
        {messages.map(msg => (
          <li key={msg.id}>{msg.text}</li>
        ))}
      </ul>
      {/* Add form here to insert new messages */}
    </div>
  );
}

export default ChatMessages;