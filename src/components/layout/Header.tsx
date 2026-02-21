// components/layout/Header.tsx
import { useState } from 'react';
import { NAV_ITEMS } from '../../constants';
import type { SectionId } from '../../types';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';

interface HeaderProps {
    activeSection: SectionId;
    isScrolled: boolean;
    onNavClick: (sectionId: SectionId) => void;
    onDownloadResume: () => void;
}

export const Header = ({
                           activeSection,
                           isScrolled,
                           onNavClick,
                           onDownloadResume
                       }: HeaderProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
            } select-none`}
            aria-label="Main navigation"
        >
            <div className="mx-auto max-w-5xl px-5 py-4 flex items-center justify-between">
                {/* Logo button */}
                <button
                    onClick={() => onNavClick('home')}
                    className="cursor-pointer text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-300 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg px-2 py-1"
                    aria-label="Go to homepage"
                >
                    IM
                </button>

                {/* Desktop navigation */}
                <nav className="hidden sm:flex items-center gap-4">
                    <ul className="flex gap-6 text-sm font-medium">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    onClick={() => onNavClick(item.id as SectionId)}
                                    className={`relative px-2 py-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg ${
                                        activeSection === item.id
                                            ? 'text-purple-400'
                                            : 'text-gray-300 hover:text-white'
                                    }`}
                                    aria-current={activeSection === item.id ? 'page' : undefined}
                                >
                                    {item.label}
                                    {activeSection === item.id && (
                                        <span
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                                            aria-hidden="true"
                                        />
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Resume button */}
                    <Button
                        variant="secondary"
                        size="sm"
                        icon="FileText"
                        iconPosition="left"
                        onClick={onDownloadResume}
                        aria-label="Download resume"
                        className="hidden sm:flex"
                    >
                        Resume
                        <Icon name="Download" className="w-3 h-3" aria-hidden="true"/>
                    </Button>
                </nav>

                {/* Mobile menu button */}
                <Button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                    className="sm:hidden p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                >
                    <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} className="w-6 h-6 text-fuchsia-50"
                          aria-hidden="true"/>
                </Button>
            </div>

            {/* Mobile navigation */}
            {isMobileMenuOpen && (
                <nav className="sm:hidden px-5 pb-4 space-y-4 bg-slate-900/95 backdrop-blur-lg shadow-lg rounded-b-lg">
                    <ul className="flex flex-col gap-4 text-sm font-medium" role="list">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    onClick={() => {
                                        onNavClick(item.id as SectionId);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={`w-full text-left px-2 py-2 transition-colors rounded-lg ${
                                        activeSection === item.id ? 'text-purple-400' : 'text-gray-300 hover:text-white'
                                    }`}
                                    aria-current={activeSection === item.id ? 'page' : undefined}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <Button
                        variant="secondary"
                        size="sm"
                        icon="FileText"
                        iconPosition="left"
                        onClick={() => {
                            onDownloadResume();
                            setIsMobileMenuOpen(false);
                        }}
                        aria-label="Download resume"
                        className="flex justify-start"
                    >
                        Resume
                        <Icon name="Download" className="w-3 h-3" aria-hidden="true"/>
                    </Button>
                </nav>
            )}

        </nav>
    );
};
