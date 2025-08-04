// Snippet 48 from Chapter 5
// Section: State Management with useState
// Subsection: Multiple State Variables
// Language: typescript
// Description: function UserSettings(): JSX.Element {
// 
// ✅ GOOD: Multiple state variables for independent concerns
function UserSettings(): JSX.Element {
  const [username, setUsername] = useState<string>("");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      // Save settings logic here
      await saveUserSettings({ username, theme, notificationsEnabled });
    } catch (error) {
      console.error('Failed to save settings');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <input 
        value={username} 
        onChange={e => setUsername(e.target.value)} 
        placeholder="Username" 
      />
      <select 
        value={theme} 
        onChange={e => setTheme(e.target.value as typeof theme)}
      >
        <option value="light">Light Theme</option>
        <option value="dark">Dark Theme</option>
      </select>
      <label>
        <input
          type="checkbox"
          checked={notificationsEnabled}
          onChange={e => setNotificationsEnabled(e.target.checked)}
        />
        Enable Notifications
      </label>
      <button onClick={handleSave} disabled={isLoading}>
        {isLoading ? 'Saving...' : 'Save Settings'}
      </button>
    </div>
  );
}

// ❌ AVOID: Single large state object for independent concerns
function UserSettingsBad(): JSX.Element {
  const [state, setState] = useState({
    username: "",
    theme: "light" as const,
    notificationsEnabled: true,
    isLoading: false
  });

  const updateState = (updates: Partial<typeof state>) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  // More complex updates and potential for errors
  const handleUsernameChange = (newUsername: string) => {
    updateState({ username: newUsername });
  };
}