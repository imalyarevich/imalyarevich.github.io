// components/ui/StatCard.tsx
import type { Stat } from '../../types';
import { Icon } from './Icon';

interface StatCardProps {
    stat: Stat;
}

export const StatCard = ({ stat }: StatCardProps) => {
    return (
        <li className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group">
            <Icon name={stat.icon} className="w-8 h-8 text-purple-400 mb-3 group-hover:scale-110 transition-transform"
                  aria-hidden="true"/>
            <p className="text-2xl font-bold text-white">{stat.value}</p>
            <p className="text-sm text-gray-400">{stat.label}</p>
        </li>
    );
};