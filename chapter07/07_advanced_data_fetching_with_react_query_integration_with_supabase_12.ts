// Snippet 12 from Chapter 7
// Section: Advanced Data Fetching with React Query
// Subsection: Integration with Supabase
// Language: typescript
// Description: import { supabase } from './supabaseClient';
// 
import { supabase } from './supabaseClient';

// Fetch data from Supabase
const postsQuery = useQuery({
  queryKey: ['posts', { category }],
  queryFn: async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .eq('category', category);
    
    if (error) throw error;
    return data;
  },
});

// Mutate data with Supabase
const createPostMutation = useMutation({
  mutationFn: async (newPost: CreatePost) => {
    const { data, error } = await supabase
      .from('posts')
      .insert(newPost)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['posts'] });
  },
});