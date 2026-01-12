'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CrealoLogo from '@/assets/icons/Crealo.svg';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Stack', href: '#stack' },
    { name: 'Contact', href: '#contact' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'py-4 bg-white/80 backdrop-blur-md border-b border-brand-100 shadow-sm'
                : 'py-6 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
                <a href="#" className="flex items-center">
                    <Image
                        src={CrealoLogo}
                        alt="Créalo"
                        height={32}
                        className="w-auto h-7 md:h-8 hover:opacity-80 transition-opacity"
                    />
                </a>

                <nav className="hidden md:block">
                    <ul className="flex gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-sm font-bold text-ink/60 hover:text-brand-600 transition-colors"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a
                    href="#contact"
                    className="px-5 py-2.5 bg-brand-600 text-white rounded-brand-md text-sm font-bold hover:bg-brand-800 transition-colors shadow-md shadow-brand-600/10"
                >
                    Work with us
                </a>
            </div>
        </motion.header>
    );
}
