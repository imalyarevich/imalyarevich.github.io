// hooks/useScrollSpy.ts
import { useState, useEffect, useCallback } from 'react';
import type { SectionId } from '../types';
import { throttleRAF } from '../utils/performance';

export const useScrollSpy = (sections: SectionId[]) => {
    const [activeSection, setActiveSection] = useState<SectionId>('home');
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = useCallback(
        throttleRAF(() => {
            setIsScrolled(window.scrollY > 50);

            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        }),
        [sections]
    );

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const scrollToSection = useCallback((sectionId: SectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            setActiveSection(sectionId);
        }
    }, []);

    return { activeSection, isScrolled, scrollToSection };
};