// components/ui/SkillCategory.tsx
import type { SkillCategory as SkillCategoryType } from '../../types';
import { Icon } from './Icon';

interface SkillCategoryProps {
    category: SkillCategoryType;
}

export const SkillCategory = ({ category }: SkillCategoryProps) => {
    return (
        <li
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all group"
        >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Icon name={category.icon} className="w-5 h-5 text-purple-400" aria-hidden="true"/>
                {category.name}
            </h3>
            <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                    <span
                        key={i}
                        className="px-3 py-1.5 bg-white/10 text-gray-300 rounded-lg text-sm hover:bg-purple-500/20 hover:text-purple-300 transition-all"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </li>
    );
};
