export interface Project {
    slug: string;
    client: string;
    role: string;
    problem: string[];
    approach: string[];
    impact: string[];
    tech: string[];
    featured?: boolean;
}

export const projects: Project[] = [
    {
        slug: 'light-edison',
        client: 'LightEdison',
        role: 'Full Stack Developer',
        featured: true,
        problem: [
            'Manual HR and accounting processes were slow and prone to error.',
            'Lack of real-time visibility into field operations.',
            'Disconnected internal tracking systems.'
        ],
        approach: [
            'Built a suite of internal tools digitizing manual workflows.',
            'Developed a custom Time & Expense Tracker with Timesheets.',
            'Implemented training and onboarding modules within internal CRM.'
        ],
        impact: [
            'Increased operational efficiency by over 40%.',
            'Real-time data synchronization across all departments.',
            'Higher team satisfaction through streamlined UX.'
        ],
        tech: ['React', 'Node.js', 'PostgreSQL', 'GCP']
    },
    {
        slug: 'sur-real-travel',
        client: 'Sur Real Travel',
        role: 'Frontend & Cloud Architect',
        problem: [
            'Static website made content updates difficult and slow.',
            'Need for a dynamic system to handle travel experience listings.',
            'High latency for global users accessing travel media.'
        ],
        approach: [
            'Architected a dynamic Firestore DB and Firebase Storage structure.',
            'Built a lightweight admin panel for real-time content management.',
            'Migrated legacy Vue site to a real-time data-driven architecture.'
        ],
        impact: [
            'Reduced content update time from days to minutes.',
            'Smooth performance for dynamic video/image experiences.',
            'Scalable backend ready for international expansion.'
        ],
        tech: ['Vue.js', 'Firebase', 'Firestore', 'Vercel']
    },
    {
        slug: 'caigua-web-agency',
        client: 'Caigua Web Agency',
        role: 'Shopify Specialist',
        problem: [
            'High churn on Shopify themes due to performance issues.',
            'Need for a streamlined development-to-production workflow.',
            'Difficulty in creating deeply customizable Shopify stores for clients.'
        ],
        approach: [
            'Refactored Shopify & WordPress themes based on high-fidelity Figma designs.',
            'Implemented editable components using Liquid and Shopify CLI.',
            'Integrated GitHub-based CI/CD workflows for Shopify themes.'
        ],
        impact: [
            'Significant improvement in Lighthouse performance scores.',
            'Faster development iterations for internal agency teams.',
            'Delivered premium, pixel-perfect e-commerce experiences.'
        ],
        tech: ['Shopify', 'Liquid', 'HTML/CSS/JS', 'GitHub Actions']
    }
];
