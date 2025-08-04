// Snippet 06 from Chapter 6
// Section: Zustand: Simple, Unopinionated State
// Subsection: Middleware (e.g., persist)
// Language: typescript
// Description: import { create } from 'zustand';
// 
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface SettingsState {
  theme: 'light' | 'dark';
  fontSize: number;
  toggleTheme: () => void;
  setFontSize: (size: number) => void;
}

// Wrap the store definition with the persist middleware
const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      // Initial state
      theme: 'light',
      fontSize: 16,
      // Actions
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      setFontSize: (size) => set({ fontSize: size }),
    }),
    {
      name: 'app-settings-storage', // Unique name for the storage item
      storage: createJSONStorage(() => localStorage), // Specify localStorage (or sessionStorage)
      // Optional: partialize to only persist specific parts of the state
      // partialize: (state) => ({ theme: state.theme }),
    }
  )
);

export default useSettingsStore;