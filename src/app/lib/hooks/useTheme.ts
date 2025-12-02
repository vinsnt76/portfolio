import { useState, useEffect } from 'react';

/**
 * Manages the application's UI theme (light/dark).
 *
 * On initial load, it sets the theme based on the user's saved preference in localStorage
 * (provided consent has been given), otherwise it defaults to their system setting.
 * This ensures a consistent experience across sessions.
 *
 * @param userHasConsented Confirms if the user has agreed to localStorage usage.
 * @returns An object containing the active `theme` and the `toggleTheme` function.
 */
export const useTheme = (userHasConsented: boolean = true) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Set the initial theme, defaulting to the user's system preference first.
    let initialTheme: 'light' | 'dark' = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    // If consent is given and a theme is saved, use that as the override.
    if (userHasConsented) {
      const savedTheme = window.localStorage.getItem('theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        initialTheme = savedTheme;
      }
    }

    setTheme(initialTheme);
    // Apply the theme class to the document root to prevent any UI flicker on load.
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, [userHasConsented]); // Rerun this logic if the user's consent status changes.

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');

    // Save the new theme to localStorage, but only if we have consent.
    if (userHasConsented) {
      window.localStorage.setItem('theme', newTheme);
    }
  };

  return { theme, toggleTheme };
};