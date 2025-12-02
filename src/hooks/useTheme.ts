import { useState, useEffect } from 'react';

/**
 * Custom hook for managing the light/dark theme state.
 * @param userHasConsented Boolean flag indicating if the user has consented to local storage usage.
 * @returns An object containing the current theme ('light' or 'dark') and a toggle function.
 */
export const useTheme = (userHasConsented: boolean = true) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // --- 1. Initial Load Effect (Runs once on mount) ---
  useEffect(() => {
    // 1. Default to system preference to guarantee assignment
    let initialTheme: 'light' | 'dark' = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    // 2. Override with localStorage value if consent is given and a value exists
    if (userHasConsented) {
      const savedTheme = window.localStorage.getItem('theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        initialTheme = savedTheme;
      }
    }
    
    setTheme(initialTheme);
    // Apply the class immediately to prevent flicker
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