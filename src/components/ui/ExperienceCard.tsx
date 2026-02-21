// components/ui/ExperienceCard.tsx
import type { Experience } from '../../types';
import { Icon } from './Icon';

interface ExperienceCardProps {
    experience: Experience;
}

export const ExperienceCard = ({ experience }: ExperienceCardProps) => {
    return (
        <article
            className="group relative"
            role="listitem"
            aria-label={`${experience.role} at ${experience.company}`}
        >
            <div
                className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity blur-xl"
                aria-hidden="true"
            />
            <div
                className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                        <span
                            className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm mb-3">
                            {experience.period}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-1">{experience.role}</h3>
                        <p className="text-lg text-gray-300">
                            {experience.company} • {experience.location}
                        </p>
                    </div>

                    {experience.link ? (
                        <a
                            href={experience.link}
                            className="flex items-center space-x-2 group rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open a work example/project for ${experience.company}`}
                        >

                            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                                {experience.accessType}
                            </span>

                            <Icon
                                name="ChevronRight"
                                className="w-6 h-6 text-gray-500 group-hover:text-purple-400 transition-colors"
                                aria-hidden="true"
                            />
                        </a>
                    ) : (
                        <span
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                            aria-label={`Access type: ${experience.accessType}`}
                        >
                            {experience.accessType}
                        </span>
                    )}
                </div>
                <ul className="space-y-2 mb-4" aria-label="Key achievements">
                    {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400">
                            <span className="text-purple-400 mt-1" aria-hidden="true">
                                •
                            </span>
                            {achievement}
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap gap-2" aria-label="Technologies used">
                    {experience.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/10"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
};
