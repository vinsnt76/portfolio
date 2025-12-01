import { useState, useEffect } from 'react';

export const useScrollspy = (ids: string[], options?: IntersectionObserverInit) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -80% 0px', // Adjust this to trigger highlighting at the right scroll position
        ...options,
      }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.unobserve(element);
    });
  }, [ids, options]);

  return activeId;
};