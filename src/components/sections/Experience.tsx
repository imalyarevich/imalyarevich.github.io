// components/sections/Experience.tsx
import { EXPERIENCES } from '../../constants';
import { ExperienceCard } from '../ui/ExperienceCard';

export const Experience = () => {
    return (
        <section
            id="experience"
            className="py-24 scroll-mt-20"
            aria-label="Work experience"
        >
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Professional Journey
                </h2>
                <div
                    className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
                    aria-hidden="true"
                />
            </div>

            <div className="space-y-8" role="list">
                {EXPERIENCES.map((experience) => (
                    <ExperienceCard key={experience.id} experience={experience} />
                ))}
            </div>
        </section>
    );
};