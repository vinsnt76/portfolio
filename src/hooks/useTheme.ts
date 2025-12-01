import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

/**
 * Manages the application's theme (light/dark).
 * It syncs with the 'dark' class on the <html> element, which is initially set by an inline script in _document.tsx to prevent FOUC.
 * @param {boolean} hasConsent - Flag indicating if the user has consented to storage.
 */
export const useTheme = (hasConsent: boolean) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // The inline script has already set the correct theme class on the server.
    // This effect simply reads that state to sync React's state with the DOM.
    const initialTheme = document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light';
    setTheme(initialTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';

      // Apply class to the DOM
      document.documentElement.classList.toggle('dark', newTheme === 'dark');

      // Persist to localStorage only if consent is given
      if (hasConsent) {
        window.localStorage.setItem('theme', newTheme);
      }
      return newTheme;
    });
  }, [hasConsent]);

  return { theme, toggleTheme };
};