export interface Project {
    slug: string;
    client: string;
    context?: string;
    url?: string;
    problem: string[];
    approach: string[];
    impact: string[];
    tech: string[];
    featured?: boolean;
    role?: string;
}

export const projects: Project[] = [
    {
        slug: 'light-edison',
        client: 'LightEdison',
        role: 'Enterprise Resource Planning',
        context: "A Denver-based renewable energy company (now also operating from Bozeman, Montana) that specialized in energy efficiency and clean energy solutions.",
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
        client: 'SurReal Travel',
        role: "CRM & Customer Experience",
        url: 'https://www.surreal.travel/',
        context: "A Chilean-based travel company specializing in authentic nature escapes and outdoor experiences across Chile.",
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
        slug: 'latitude-coffee',
        client: 'Latitude Coffee',
        role: "Shopify Theme Refactoring",
        context: 'A specialty coffee roaster and retailer sourcing premium, ethically-sourced coffee beans directly from farmers worldwide.',
        url: 'https://latitudecoffee.com/',
        featured: true,
        problem: [
            'Existing theme performance was hindering user experience and sales.',
            'Need for a visual refresh based on Figma designs while maintaining brand identity.',
            'Requirement for deep customization capabilities for the merchant.'
        ],
        approach: [
            'Migrated existing setup to Dawn 2.0 theme, achieving a 150% performance increase.',
            'Refactored visual elements to match high-fidelity Figma designs pixel-perfectly.',
            'Extended theme capabilities with custom Liquid sections for merchant editing.'
        ],
        impact: [
            'Drastic reduction in load times leading to higher conversion rates.',
            'Seamless visual transition with improved UX/UI modernization.',
            'Empowered client with a flexible, no-code editable storefront.'
        ],
        tech: ['Shopify', 'Liquid', 'Dawn', 'Figma']
    },
    {
        slug: 'coffee-plus',
        client: 'CoffeePlus',
        role: "Shopify Theme Development",
        context: 'A specialty coffee company focused on a premium coffee blend enhanced with vitamins and nutrients designed to support recovery and boost energy.',
        url: 'https://coffeeplus.us/',
        problem: [
            'Need for a brand new e-commerce presence started from scratch.',
            'Specific design requirements that out-of-the-box themes could not meet.',
            'Complex content management needs for specific product displays.'
        ],
        approach: [
            'Developed a fresh storefront using the Dawn theme as a high-performance baseline.',
            'Implemented custom modules to match specific Figma design requirements.',
            'Engineered intuitive theme editor controls for easy content updates.'
        ],
        impact: [
            'Successfully launched a polished, professional brand presence.',
            'High-performance foundation ensuring scalability for future growth.',
            'Reduced dependency on developers for day-to-day site management.'
        ],
        tech: ['Shopify', 'Liquid', 'HTML/CSS', 'Figma']
    },
    {
        slug: 'niuk',
        client: 'Niuk',
        role: "Shopify Storefront Development",
        url: 'https://niuk.com/',
        context: "A French-engineered wellness and beauty technology company offering an innovative cryotherapy roll-on device.",
        problem: [
            'Migration challenge: Moving from WordPress to Shopify while preserving exact styling.',
            'Tight deadline: Complete implementation required within 3 weeks.',
            'Need for granular control over site content via the theme editor.'
        ],
        approach: [
            'Executed a rapid, full-cycle migration to Dawn theme in under 3 weeks.',
            'Recreated WordPress visual styles within Shopify’s Liquid architecture.',
            'Customized the theme schema to allow extensive client-side modifications.'
        ],
        impact: [
            'Seamless platform switch with zero loss in brand visual identity.',
            'Met aggressive launch timeline without compromising code quality.',
            'Delivered a fully self-manageable store exceeding client expectations.'
        ],
        tech: ['Shopify', 'Liquid', 'WordPress Migration', 'Dawn']
    }
];
