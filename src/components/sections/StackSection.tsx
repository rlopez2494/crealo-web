'use client';

import { motion } from 'framer-motion';
import {
    Database, Globe, Palette,
    Search, Play, Settings
} from 'lucide-react';
import { useTranslations } from 'next-intl';

const techCategories = [
    {
        name: 'Frontend',
        techs: ['Vue', 'React', 'Storybook', 'Shopify', 'Tailwind', 'Next.js'],
        icon: Globe
    },
    {
        name: 'Backend & DB',
        techs: ['Node', 'Firebase', 'Express', 'Drizzle', 'Supabase', 'SQL'],
        icon: Database
    },
    {
        name: 'Tools & Design',
        techs: ['TypeScript', 'Figma', 'Trello', 'Jest', 'Vitest', 'Vercel'],
        icon: Palette
    }
];

const techIcons = [
    'React', 'Next.js', 'Vue', 'Shopify', 'Node', 'Firebase',
    'TypeScript', 'Tailwind', 'Storybook', 'Vercel', 'PostgreSQL', 'Figma'
];

export default function StackSection() {
    const t = useTranslations('Stack');

    const steps = [
        {
            title: t('steps.discover.title'),
            description: t('steps.discover.description'),
            icon: Search
        },
        {
            title: t('steps.build.title'),
            description: t('steps.build.description'),
            icon: Play
        },
        {
            title: t('steps.ship.title'),
            description: t('steps.ship.description'),
            icon: Settings
        }
    ];

    return (
        <section id="stack" className="min-h-screen flex items-center snap-start bg-brand-100/10 px-4 md:px-8 py-20 md:py-0">
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Tech Stack Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-h2 text-ink mb-6">{t('title')}</h2>
                        <p className="text-body text-ink/70 mb-10">
                            {t('description')}
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {techCategories.map((cat, i) => (
                                <div key={i} className="p-4 bg-white rounded-brand-md border border-brand-100 shadow-sm">
                                    <div className="flex items-center gap-3 mb-4 text-brand-600">
                                        <cat.icon size={20} />
                                        <h4 className="font-heading font-bold text-ink">{cat.name}</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {cat.techs.map((t) => (
                                            <span key={t} className="px-2 py-1 bg-brand-100/30 text-brand-800 text-[10px] font-bold rounded-md">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Marquee (Simple CSS implementation) */}
                        <div className="mt-12 overflow-hidden relative hidden lg:block">
                            <div className="flex gap-8 animate-marquee whitespace-nowrap py-4 grayscale opacity-40">
                                {[...techIcons, ...techIcons].map((icon, i) => (
                                    <span key={i} className="text-xl font-heading font-black tracking-tighter text-ink uppercase">
                                        {icon}
                                    </span>
                                ))}
                            </div>
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-brand-100/0 via-transparent to-brand-100/0" />
                        </div>
                    </motion.div>

                    {/* How We Work Timeline */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-heading font-bold text-brand-800 mb-8">{t('howWeWork')}</h3>
                        <div className="relative">
                            <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-brand-100 hidden md:block" />
                            <div className="space-y-12">
                                {steps.map((step, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.2 }}
                                        className="relative flex items-start gap-6"
                                    >
                                        <div className="z-10 flex-shrink-0 w-14 h-14 rounded-full bg-white border-4 border-brand-100 flex items-center justify-center text-brand-600 shadow-sm">
                                            <step.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-heading font-bold text-ink text-lg mb-2">{step.title}</h4>
                                            <p className="text-sm text-ink/60 leading-relaxed max-w-sm">{step.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
