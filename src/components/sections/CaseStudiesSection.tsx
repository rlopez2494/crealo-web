'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from '@/data/caseStudies';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function CaseStudiesSection() {
    const [activeProject, setActiveProject] = useState<Project>(projects[0]);
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - 200 : scrollLeft + 200;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section id="case-studies" className="min-h-screen flex items-center snap-start bg-white px-4 md:px-8 py-20">
            <div className="max-w-6xl mx-auto w-full">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-h2 text-ink mb-12 text-center md:text-left"
                >
                    Selected work.
                </motion.h2>

                <div className="w-full">
                    <AnimatePresence mode="wait">
                        <div className="bg-brand-100/10 border border-brand-100 rounded-brand-lg min-h-[400px] flex flex-col shadow-sm overflow-hidden">

                            {/* Integrated Compact Navbar */}
                            <div className="bg-white/50 backdrop-blur-sm border-b border-brand-100 px-4 md:px-8 py-3 relative group/nav">
                                <div className="absolute left-2 top-0 bottom-0 flex items-center z-10">
                                    <button
                                        onClick={() => scroll('left')}
                                        className="bg-white border border-brand-100 p-1 rounded-full shadow-sm hover:bg-brand-50 transition-colors opacity-0 group-hover/nav:opacity-100"
                                    >
                                        <ChevronLeft size={16} className="text-brand-600" />
                                    </button>
                                </div>

                                <div
                                    ref={scrollRef}
                                    className="flex gap-2 overflow-x-auto no-scrollbar scroll-smooth px-4"
                                >
                                    {projects.map((project) => (
                                        <button
                                            key={project.slug}
                                            onClick={() => setActiveProject(project)}
                                            className={`whitespace-nowrap px-4 py-2 rounded-full border transition-all duration-300 text-xs font-bold flex items-center gap-2 ${activeProject.slug === project.slug
                                                ? 'bg-brand-600 border-brand-600 text-white shadow-sm'
                                                : 'bg-white/50 border-brand-50 text-ink/60 hover:border-brand-200 hover:text-ink'
                                                }`}
                                        >
                                            <span className={`text-[9px] uppercase tracking-tighter ${activeProject.slug === project.slug ? 'text-brand-200' : 'text-brand-600'}`}>
                                                {project.client}
                                            </span>
                                            {project.role}
                                        </button>
                                    ))}
                                </div>

                                <div className="absolute right-2 top-0 bottom-0 flex items-center z-10">
                                    <button
                                        onClick={() => scroll('right')}
                                        className="bg-white border border-brand-100 p-1 rounded-full shadow-sm hover:bg-brand-50 transition-colors opacity-0 group-hover/nav:opacity-100"
                                    >
                                        <ChevronRight size={16} className="text-brand-600" />
                                    </button>
                                </div>
                            </div>

                            {/* Project Content */}
                            <motion.div
                                key={activeProject.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}

                                className="p-6 md:p-10 flex-grow flex flex-col">
                                <div className="flex justify-between items-start mb-10">
                                    <div>
                                        <span className="text-sm font-semibold uppercase tracking-wider text-brand-600 mb-2 block">
                                            {activeProject.client}
                                        </span>
                                        <h3 className="text-4xl font-heading font-bold text-ink">
                                            {activeProject.role}
                                        </h3>
                                    </div>
                                    <div className="hidden md:flex flex-wrap gap-2 justify-end max-w-[300px]">
                                        {activeProject.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 bg-white border border-brand-100 rounded-full text-[10px] font-medium text-ink/70">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 flex-grow">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                            <h4 className="font-bold text-accent text-xs tracking-widest uppercase">The Problem</h4>
                                        </div>
                                        <ul className="space-y-3">
                                            {activeProject.problem.map((p, i) => (
                                                <li key={i} className="text-sm text-ink/70 leading-relaxed pl-3 border-l border-brand-100">{p}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                                            <h4 className="font-bold text-brand-600 text-xs tracking-widest uppercase">The Approach</h4>
                                        </div>
                                        <ul className="space-y-3">
                                            {activeProject.approach.map((p, i) => (
                                                <li key={i} className="text-sm text-ink/70 leading-relaxed pl-3 border-l border-brand-100">{p}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-ink" />
                                            <h4 className="font-bold text-ink text-xs tracking-widest uppercase">The Impact</h4>
                                        </div>
                                        <ul className="space-y-3">
                                            {activeProject.impact.map((p, i) => (
                                                <li key={i} className="text-sm text-ink/80 font-medium leading-relaxed pl-3 border-l border-ink/10">{p}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
