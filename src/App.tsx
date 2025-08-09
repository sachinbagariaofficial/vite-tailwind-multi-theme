import React from "react";
import useTheme from "./useTheme";

function App() {
  const { themeMode, setThemeMode } = useTheme();

  // Change the theme
  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setThemeMode(event.target.value);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground transition-colors duration-500">
      <section className="max-w-md p-8 rounded-lg shadow-lg bg-card text-card-foreground space-y-6">
        <h1 className="text-3xl font-semibold">Theme Switcher Demo</h1>
        <p className="text-lg">Select a theme from the dropdown below:</p>

        <select
          value={themeMode}
          onChange={handleThemeChange}
          className="w-full py-2 px-4 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
          aria-label="Select theme"
        >
          <option value="">Default (Light)</option>
          <option value="dark">Dark</option>
          <option value="green">Green</option>
        </select>
      </section>
    </main>
  );
}

export default App;
