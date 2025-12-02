import { useState, useEffect } from 'react';

/**
 * Custom hook for managing the light/dark theme state.
 * It reads the initial state from localStorage or system preferences (prefers-color-scheme).
 * It persists the theme selection to localStorage, respecting the userHasConsented flag.
 * * @param userHasConsented Boolean flag indicating if the user has consented to local storage usage.
 * @returns An object containing the current theme ('light' or 'dark') and a toggle function.
 */
export const useTheme = (userHasConsented: boolean = true) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // --- 1. Initial Load Effect (Runs once on mount) ---
  useEffect(() => {
    let initialTheme: 'light' | 'dark';

    // 1. Try to load from localStorage if consent is given
    if (userHasConsented) {
      const savedTheme = window.localStorage.getItem('theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        initialTheme = savedTheme;
      }
    }

    // 2. Fallback to system preference if no saved theme or no consent
    if (!initialTheme) {
      initialTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, [userHasConsented]); // Re-run if consent state changes

  // --- 2. Theme Toggle Function ---
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');

    // Persist to localStorage only if user has consented
    if (userHasConsented) {
      window.localStorage.setItem('theme', newTheme);
    }
  };

  return { theme, toggleTheme };
};