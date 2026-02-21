import {
    Brain,
    Briefcase,
    ChevronRight,
    Clock,
    Code2,
    Copy,
    Cpu,
    Download,
    FileText,
    Gauge,
    Github,
    GraduationCap,
    Layers,
    Linkedin,
    Mail,
    Menu,
    Rocket,
    Smartphone,
    Sparkles,
    Users,
    X
} from 'lucide-react';
import { type ComponentType, type SVGProps } from 'react';

const icons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
    Briefcase,
    GraduationCap,
    Code2,
    Rocket,
    Github,
    Linkedin,
    Mail,
    ChevronRight,
    Clock,
    Copy,
    Cpu,
    Menu,
    X,
    Gauge,
    Brain,
    Sparkles,
    Layers,
    FileText,
    Download,
    Smartphone,
    Users
};

interface IconProps extends SVGProps<SVGSVGElement> {
    name: keyof typeof icons;
}

export const Icon = ({ name, className = 'w-5 h-5', ...props }: IconProps) => {
    const IconComponent = icons[name];
    if (!IconComponent) return null;

    return <IconComponent className={className} {...props} />;
};
