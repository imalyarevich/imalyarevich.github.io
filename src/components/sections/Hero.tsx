// components/sections/Hero.tsx
import { SOCIAL_LINKS, STATS } from '../../constants';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { StatCard } from '../ui/StatCard';

interface HeroProps {
    onContactClick: () => void;
    onExperienceClick: () => void;
    onDownloadResume: () => void;
}

export const Hero = ({ onContactClick, onExperienceClick, onDownloadResume }: HeroProps) => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center pt-16 scroll-mt-16"
            aria-label="Hero section"
        >
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <div
                        role="status"
                        className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full"
                    >
                        <Icon
                            name="Sparkles"
                            className="w-4 h-4 text-purple-400"
                            aria-hidden="true"
                        />
                        <span className="text-sm text-purple-400">Available for opportunities</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold">
                        <span className="text-white">Ivan</span>
                        <br/>
                        <span
                            className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                            Malyarevich
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 leading-relaxed">
                        Senior Frontend Engineer specializing in{' '}
                        <span className="text-purple-400 font-semibold">Angular</span> &{' '}
                        <span className="text-pink-400 font-semibold">React</span>
                    </p>

                    <p className="text-gray-400 text-lg leading-relaxed">
                        10+ years of crafting high-performance web applications with a passion for
                        clean architecture and exceptional user experiences.
                    </p>

                    <div
                        className="flex flex-wrap gap-4 pt-4"
                        role="group"
                        aria-label="Call to action buttons"
                    >
                        <Button variant="primary" size="lg" onClick={onContactClick}>
                            Get in touch
                        </Button>
                        <Button variant="secondary" size="lg" onClick={onExperienceClick}>
                            View work
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            icon="FileText"
                            iconPosition="left"
                            onClick={onDownloadResume}
                        >
                            Download CV
                            <Icon
                                name="Download"
                                className="w-3 h-3 group-hover:translate-y-0.5 transition-transform"
                                aria-hidden="true"
                            />
                        </Button>
                    </div>

                    <nav className="flex gap-4 pt-6" aria-label="Social links">
                        <a
                            href={`mailto:${SOCIAL_LINKS.email}`}
                            className="text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg p-2"
                            aria-label={`Email ${SOCIAL_LINKS.email}`}
                        >
                            <Icon name="Mail" className="w-5 h-5" aria-hidden="true"/>
                        </a>
                        <a
                            href={SOCIAL_LINKS.github}
                            className="text-gray-400 hover:text-white transition-colors focus-visible:outline-none focus:ring-2 focus-visible:ring-purple-400 rounded-lg p-2"
                            aria-label="GitHub profile"
                            rel="noopener noreferrer"
                        >
                            <Icon name="Github" className="w-5 h-5" aria-hidden="true"/>
                        </a>
                        <a
                            href={SOCIAL_LINKS.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg p-2"
                            aria-label="LinkedIn profile (opens in new tab)"
                        >
                            <Icon name="Linkedin" className="w-5 h-5" aria-hidden="true"/>
                        </a>
                    </nav>
                </div>

                <ul className="grid grid-cols-2 gap-4" aria-label="Statistics">
                    {STATS.map((stat) => (
                        <StatCard key={stat.id} stat={stat}/>
                    ))}
                </ul>
            </div>
        </section>
    );
};
