import { useEffect, useState } from 'react';

const isServer = typeof window === 'undefined';

export const useTheme = () => {
  // Initialize state from localStorage if available, otherwise default to 'light'
  const [theme, setTheme] = useState(() => {
    if (isServer) {
      return 'light';
    }
    return localStorage.getItem('theme') || 'light';
  });

  // Effect to apply the theme to the document and save to localStorage
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Don't run this on the server
    if (!isServer) {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return { theme, toggleTheme };
};