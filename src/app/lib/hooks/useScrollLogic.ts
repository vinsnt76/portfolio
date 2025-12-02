import { useState, useEffect } from 'react';

/**
 * Custom hook to track whether the user has scrolled past a certain point.
 * @param scrollThreshold The vertical scroll position (in pixels) to trigger the sticky state.
 */
export const useScrollLogic = (scrollThreshold: number = 50) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Only run on the client side
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setIsSticky(window.scrollY > scrollThreshold);
    };

    // Set initial state and add event listener
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold]);

  return { isSticky };
};