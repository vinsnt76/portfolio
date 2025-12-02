import { useState, useEffect } from 'react';

/**
 * A custom hook that detects which section is currently in the viewport.
 * @param sectionIds - An array of element IDs to track.
 * @param options - Optional IntersectionObserver options.
 * @returns The ID of the currently active section.
 */
export const useScrollspy = (
  sectionIds: string[],
  options?: IntersectionObserverInit
): string => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', ...options } // Set rootMargin to trigger when section is in the middle of the screen
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds, options]);

  return activeSection;
};