// components/sections/Skills.tsx
import { SKILLS } from '../../constants';
import { SkillCategory } from '../ui/SkillCategory';

export const Skills = () => {
    return (
        <section
            id="skills"
            className="py-24 scroll-mt-20"
            aria-label="Technical skills"
        >
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Technical Arsenal
                </h2>
                <div
                    className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
                    aria-hidden="true"
                />
            </div>

            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.values(SKILLS).map((category) => (
                    <SkillCategory key={category.name} category={category}/>
                ))}
            </ul>
        </section>
    );
};