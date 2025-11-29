import { useState, useEffect } from 'react';

const useScrollspy = (ids: string[], offset: number = 0): string => {
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
                rootMargin: `-${offset}px 0px -${window.innerHeight - offset - 1}px 0px`,
            }
        );

        ids.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [ids, offset]);

    return activeId;
};

export default useScrollspy;