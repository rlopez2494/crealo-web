'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import CrealoLogo from '@/assets/icons/Crealo.svg';

const FloatingThought = ({ text, index }: { text: string; index: number }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Random initial position
        setPosition({
            x: Math.random() * 80 + 10, // 10% to 90%
            y: Math.random() * 80 + 10,
        });
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: [0, 0.4, 0.4, 0],
                y: [0, -100],
                x: [0, Math.random() * 40 - 20],
            }}
            transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: index * 3,
                ease: "linear"
            }}
            className="absolute pointer-events-none whitespace-nowrap px-4 py-2 rounded-full bg-brand-100/10 border border-brand-100/20 backdrop-blur-sm text-sm text-brand-300"
            style={{ left: `${position.x}%`, top: `${position.y}%` }}
        >
            {text}
        </motion.div>
    );
};

export default function HeroSection() {
    const t = useTranslations('Hero');
    const [sloganIndex, setSloganIndex] = useState(0);

    const thoughts = t.raw('thoughts') as string[];
    const slogans = t.raw('slogans') as string[];

    useEffect(() => {
        const interval = setInterval(() => {
            setSloganIndex((prev) => (prev + 1) % slogans.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [slogans.length]);

    return (
        <section className="relative h-screen flex flex-col items-center justify-center snap-start overflow-hidden bg-white">
            {/* Background Particles (Floating Thoughts) */}
            <div className="absolute inset-0 overflow-hidden">
                {thoughts.map((text, i) => (
                    <FloatingThought key={i} text={text} index={i} />
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <img
                        src={CrealoLogo.src}
                        alt="Créalo Logo"
                        className="h-24 md:h-32 mx-auto"
                    />
                </motion.div>

                <div className="h-12 mb-12">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={sloganIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5 }}
                            className="text-h3 text-ink/80 font-medium"
                        >
                            {slogans[sloganIndex]}
                        </motion.p>
                    </AnimatePresence>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-brand-600 text-white rounded-brand-md font-semibold hover:bg-brand-800 transition-colors shadow-lg shadow-brand-600/20"
                    >
                        {t('cta.book')}
                    </a>
                    <a
                        href="#case-studies"
                        className="px-8 py-4 bg-white text-brand-600 border border-brand-100 rounded-brand-md font-semibold hover:bg-brand-100/10 transition-colors"
                    >
                        {t('cta.viewWork')}
                    </a>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-8 text-sm text-ink/60"
                >
                    {t('trustedBy')}
                </motion.p>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-300"
            >
                <div className="w-6 h-10 border-2 border-brand-100 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-brand-300 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
