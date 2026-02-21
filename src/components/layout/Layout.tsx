// components/layout/Layout.tsx
import type { ReactNode } from 'react';
import type { SectionId } from '../../types';
import { AnimatedBackground } from '../shared/AnimatedBackground.tsx';
import { Header } from './Header';

interface LayoutProps {
    children: ReactNode;
    activeSection: SectionId;
    isScrolled: boolean;
    onNavClick: (sectionId: SectionId) => void;
    onDownloadResume: () => void;
}

export const Layout = ({
                           children,
                           activeSection,
                           isScrolled,
                           onNavClick,
                           onDownloadResume
                       }: LayoutProps) => {
    return (
        <>
            <AnimatedBackground/>

            <Header
                activeSection={activeSection}
                isScrolled={isScrolled}
                onNavClick={onNavClick}
                onDownloadResume={onDownloadResume}
            />

            <main id="main-content"
                  className="relative mx-auto min-w-sm max-w-5xl px-5 py-8 md:px-8 lg:py-16 select-none">
                {children}
            </main>

            <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-blob,
          .group-hover\\:scale-110,
          .group-hover\\:translate-y-0\\.5,
          .transition-all,
          .transition-colors,
          .transition-transform,
          .transition-opacity {
            animation: none !important;
            transition: none !important;
            transform: none !important;
          }
        }
        
        .motion-safe:where(.animate-blob) {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }

        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        :focus-visible {
          outline: 2px solid #c084fc;
          outline-offset: 2px;
        }

        :focus:not(:focus-visible) {
          outline: none;
        }
      `}</style>
        </>
    );
};