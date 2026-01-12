'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from '@/data/caseStudies';
import { ChevronRight, ArrowRight } from 'lucide-react';

export default function CaseStudiesSection() {
    const [activeProject, setActiveProject] = useState<Project>(projects[0]);

    return (
        <section id="case-studies" className="h-[auto] min-h-screen md:h-screen flex items-center snap-start bg-white px-4 md:px-8 py-20 md:py-0">
            <div className="max-w-6xl mx-auto w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-h2 text-ink mb-12 text-center md:text-left"
                >
                    Selected work.
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    {/* Main Display (Left/Featured) */}
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProject.slug}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.5 }}
                                className="bg-brand-100/10 border border-brand-100 p-6 md:p-10 rounded-brand-lg h-full flex flex-col"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <span className="text-sm font-semibold uppercase tracking-wider text-brand-600 mb-2 block">
                                            {activeProject.client}
                                        </span>
                                        <h3 className="text-3xl font-heading font-bold text-ink">
                                            {activeProject.role}
                                        </h3>
                                    </div>
                                    <div className="hidden md:flex flex-wrap gap-2 justify-end max-w-[200px]">
                                        {activeProject.tech.map((t) => (
                                            <span key={t} className="px-2 py-1 bg-white border border-brand-100 rounded-md text-[10px] text-ink/60">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 flex-grow">
                                    <div>
                                        <h4 className="font-bold text-accent mb-3 text-sm">THE PROBLEM</h4>
                                        <ul className="space-y-2">
                                            {activeProject.problem.map((p, i) => (
                                                <li key={i} className="text-xs text-ink/70 leading-relaxed">• {p}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-600 mb-3 text-sm">THE APPROACH</h4>
                                        <ul className="space-y-2">
                                            {activeProject.approach.map((p, i) => (
                                                <li key={i} className="text-xs text-ink/70 leading-relaxed">• {p}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-ink mb-3 text-sm">THE IMPACT</h4>
                                        <ul className="space-y-2">
                                            {activeProject.impact.map((p, i) => (
                                                <li key={i} className="text-xs text-ink/80 font-medium leading-relaxed">• {p}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mt-auto">
                                    <span className="text-xs text-ink/40 italic">Reference available on request</span>
                                    <button className="flex items-center gap-2 px-6 py-3 bg-ink text-white rounded-brand-md hover:bg-brand-800 transition-colors group text-sm font-semibold">
                                        See details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Selector List (Right) */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        {projects.map((project) => (
                            <button
                                key={project.slug}
                                onClick={() => setActiveProject(project)}
                                className={`text-left p-6 rounded-brand-md border transition-all duration-300 ${activeProject.slug === project.slug
                                    ? 'bg-brand-600 border-brand-600 text-white shadow-lg'
                                    : 'bg-white border-brand-100 text-ink hover:border-brand-300'
                                    }`}
                            >
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className={`text-[10px] font-bold uppercase transition-colors ${activeProject.slug === project.slug ? 'text-brand-300' : 'text-brand-600'
                                            }`}>
                                            {project.client}
                                        </span>
                                        <h4 className="font-heading font-bold text-sm">{project.role}</h4>
                                    </div>
                                    <ChevronRight size={20} className={activeProject.slug === project.slug ? 'opacity-100' : 'opacity-20'} />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
