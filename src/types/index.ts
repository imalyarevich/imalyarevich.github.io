// types/index.ts
export interface Stat {
    id: string;
    label: string;
    value: string;
    icon: string;
}

export interface Achievement {
    text: string;
}

export interface Experience {
    id: string;
    period: string;
    role: string;
    company: string;
    location: string;
    achievements: string[];
    accessType: string;
    link?: string;
    tags: string[];
}

export interface SkillCategory {
    name: string;
    icon: string;
    items: string[];
}

export interface NavItem {
    id: string;
    label: string;
}

export type SectionId = 'home' | 'experience' | 'skills' | 'contact';