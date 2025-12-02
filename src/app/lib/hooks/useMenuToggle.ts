import { useState, useCallback } from 'react';

/**
 * Custom hook to manage the state and control of a toggleable menu.
 */
export const useMenuToggle = (initialState: boolean = false) => {
  const [isMenuOpen, setIsMenuOpen] = useState(initialState);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return { isMenuOpen, toggleMenu, closeMenu };
};