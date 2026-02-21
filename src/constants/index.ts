// constants/index.ts
import type { Experience, NavItem, SkillCategory, Stat } from '../types';

export const STATS: Stat[] = [
    { id: 'years', label: 'Years Experience', value: '10+', icon: 'Clock' },
    { id: 'performance', label: 'Performance Boost', value: '50%', icon: 'Gauge' },
    { id: 'ux', label: 'UX Improvement', value: '40%', icon: 'Users' },
    { id: 'efficiency', label: 'Team Efficiency', value: '35%', icon: 'Rocket' },
];

export const EXPERIENCES: Experience[] = [
    {
        id: 'brandhope',
        period: '01/2025 - Present',
        role: 'Co-Founder / Frontend Advisor',
        company: 'BrandHope',
        location: 'Hybrid, US',
        achievements: [
            'Boosted feature delivery by 60% through AI APIs and workflow automation',
            'Improved Core Web Vitals and responsiveness by 45%',
            'Optimized UX strategy and frontend architecture with NgRx, Redux, GraphQL',
            'Improved code quality by 40% through mentoring and testing best practices'
        ],
        accessType: 'Partial NDA',
        tags: ['Angular', 'AI APIs', 'NgRx', 'Redux', 'GraphQL', 'CI/CD']
    },
    {
        id: 'tbi',
        period: '09/2021 - 08/2025',
        role: 'Senior Software Engineer',
        company: 'TBI Bank',
        location: 'Remote, BG',
        achievements: [
            'Increased operational efficiency by 35% using Angular and NgRx',
            'Reduced user complaints by 40% through UX and performance improvements',
            'Achieved 20% performance gains via lazy loading and Webpack optimization',
            'Reduced onboarding time by 50% through mentoring',
            'Accelerated development using AI-assisted tools'
        ],
        accessType: 'Partial NDA',
        link: 'https://tbibank.bg/',
        tags: ['Angular', 'NgRx', 'TypeScript', 'Jenkins', 'Docker']
    },
    {
        id: 'state',
        period: '01/2020 - 08/2021',
        role: 'Frontend Specialist / Core Team Developer',
        company: 'State-Owned Enterprise',
        location: 'Onsite, UA',
        achievements: [
            'Increased client acquisition by 33%',
            'Boosted form submissions by 25% using Tailwind & Material UI',
            'Reduced data retrieval time by 67% via optimized state management',
            'Migrated legacy systems to GraphQL & MongoDB'
        ],
        accessType: 'NDA',
        tags: ['Angular', 'React', 'GraphQL', 'MongoDB', 'Tailwind']
    },
    {
        id: 'instructor',
        period: '09/2019 - 12/2019',
        role: 'Computer Science Instructor',
        company: 'Government Institution',
        location: 'Onsite, UA',
        achievements: [
            'Delivered structured frontend training programs',
            'Helped 90% of students reach TypeScript & Angular proficiency',
            'Introduced Git workflows and debugging practices'
        ],
        accessType: 'Public',
        tags: ['Teaching', 'HTML', 'TypeScript', 'React', 'Angular']
    },
    {
        id: 'outsource',
        period: '09/2014 - 12/2019',
        role: 'Software Developer',
        company: 'Outsource',
        location: 'Hybrid, UA',
        achievements: [
            'Reduced page load times by 50%',
            'Cut production bugs by 40% via refactoring and reviews',
            'Implemented real-time updates with WebSockets and REST APIs'
        ],
        accessType: 'NDA',
        tags: ['AngularJS', 'React', 'WebSockets', 'REST', 'Performance']
    }
];

export const SKILLS: Record<string, SkillCategory> = {
    core: {
        name: 'Core',
        icon: 'Code2',
        items: ['Angular', 'React', 'TypeScript', 'JavaScript/ES6+', 'HTML5/CSS3', 'Web Accessibility']
    },
    state: {
        name: 'State & APIs',
        icon: 'Layers',
        items: ['NgRx', 'Redux', 'REST', 'GraphQL', 'WebSockets']
    },
    styling: {
        name: 'Styling',
        icon: 'Sparkles',
        items: ['Tailwind CSS', 'Material UI', 'Bootstrap', 'Ant Design', 'SASS']
    },
    devops: {
        name: 'DevOps & Tools',
        icon: 'Cpu',
        items: ['Webpack', 'Vite', 'Docker', 'Jenkins', 'Git', 'CI/CD']
    },
    performance: {
        name: 'Performance',
        icon: 'Gauge',
        items: ['Core Web Vitals', 'Lighthouse', 'Chrome DevOps', 'Lazy Loading']
    },
    testing: {
        name: 'Testing & AI',
        icon: 'Brain',
        items: ['Jasmine/Jest', 'Cypress', 'GitHub Copilot', 'ChatGPT', 'DeepSeek']
    }
};

export const NAV_ITEMS: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
];

export const SOCIAL_LINKS = {
    email: 'ivanmalyarevich@gmail.com',
    linkedin: 'https://linkedin.com/in/ivan-malyarevich/',
    github: 'https://github.com/imalyarevich/imalyarevich.github.io',
    phone: '+4915162640543'
};