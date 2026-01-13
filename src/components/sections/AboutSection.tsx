'use client';
import { motion } from 'framer-motion';
import { Target, Zap, Layout } from 'lucide-react';

const pillars = [
    {
        title: 'Operational Efficiency',
        description: 'We streamline complex processes and build internal tools that save teams hundreds of manual hours.',
        icon: Target,
    },
    {
        title: 'Performance & Refactoring',
        description: 'We take legacy codebases and modernize them for speed, stability, and scale.',
        icon: Zap,
    },
    {
        title: 'Clean Architecture',
        description: 'We design modular, adaptable systems that grow with your business without the chaos.',
        icon: Layout,
    },
];

const capabilities = [
    'ERP Feature Design & Implementation',
    'Shopify Performance Optimization',
    'MVP Development (Web & Mobile)',
    'Requirement Discovery & Technical Strategy',
    'Cross-functional Team Collaboration',
];

export default function AboutSection() {
    return (
        <section id="about" className="h-[auto] min-h-screen md:h-screen flex items-center snap-start bg-brand-100/5 px-4 md:px-8">
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-h2 text-ink mb-6">
                            Boutique engineering for ambitious outcomes.
                        </h2>
                        <p className="text-body text-ink/70 mb-8 max-w-xl">
                            We help teams move from designing ERP-oriented features to refactoring large e-commerce codebases.
                            Our mission is to increase operational efficiency by organizing technical execution into validated,
                            iterative solutions that foster adaptability.
                        </p>

                        <div className="space-y-4">
                            <h3 className="font-heading font-semibold text-brand-800">What we’re great at:</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {capabilities.map((cap, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-ink/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                        {cap}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-4 hidden lg:grid">
                        {pillars.map((pillar, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 bg-white border border-brand-100 rounded-brand-md shadow-sm hover:shadow-md transition-shadow group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-brand-100/30 rounded-lg text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                                        <pillar.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-bold text-ink mb-2">{pillar.title}</h4>
                                        <p className="text-sm text-ink/60 leading-relaxed">{pillar.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
