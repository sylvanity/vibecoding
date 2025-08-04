// Snippet 02 from Chapter 6
// Section: Enhanced State Management Comparison
// Subsection: 
// Language: typescript
// Description: const useAppStore = create((set) => ({
// 
// Global app state with Zustand
const useAppStore = create((set) => ({
  theme: 'light',
  setTheme: (theme) => set({ theme }),
}));

// Component-specific state with Jotai
const formDataAtom = atom({ name: '', email: '' });

function UserForm() {
  const theme = useAppStore((state) => state.theme);
  const [formData, setFormData] = useAtom(formDataAtom);
  
  return (
    <form className={theme}>
      {/* form fields */}
    </form>
  );
}