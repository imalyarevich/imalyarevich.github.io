// App.tsx
import { useScrollSpy } from './hooks/useScrollSpy';
import { useDownloadResume } from './hooks/useDownloadResume';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';

function App() {
    const { activeSection, isScrolled, scrollToSection } = useScrollSpy([
        'home',
        'experience',
        'skills',
        'contact'
    ]);

    const downloadResume = useDownloadResume();

    return (
        <Layout
            activeSection={activeSection}
            isScrolled={isScrolled}
            onNavClick={scrollToSection}
            onDownloadResume={downloadResume}
        >
            <Hero
                onContactClick={() => scrollToSection('contact')}
                onExperienceClick={() => scrollToSection('experience')}
                onDownloadResume={downloadResume}
            />
            <Experience />
            <Skills />
            <Contact onDownloadResume={downloadResume} />
        </Layout>
    );
}

export default App;