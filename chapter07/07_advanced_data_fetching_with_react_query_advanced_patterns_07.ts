// Snippet 07 from Chapter 7
// Section: Advanced Data Fetching with React Query
// Subsection: Advanced Patterns
// Language: typescript
// Description: function UpdateUserForm({ userId }: { userId: stri...
// 
function UpdateUserForm({ userId }: { userId: string }) {
  const queryClient = useQueryClient();
  
  const updateUserMutation = useMutation({
    mutationFn: (userData: Partial<User>) => updateUser(userId, userData),
    onSuccess: (updatedUser) => {
      // Invalidate and refetch user data
      queryClient.invalidateQueries({ queryKey: ['user', userId] });
      
      // Or update cache directly for immediate UI update
      queryClient.setQueryData(['user', userId], updatedUser);
      
      // Show success message
      toast.success('Profile updated successfully!');
    },
    onError: (error) => {
      toast.error('Failed to update profile');
    },
  });

  const handleSubmit = (formData: FormData) => {
    const userData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
    };
    updateUserMutation.mutate(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
    </form>
  );
}