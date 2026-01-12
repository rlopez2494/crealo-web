'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import Image from 'next/image';
import CrealoLogo from '@/assets/icons/Crealo.svg';

export default function ContactSection() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate form submission
        setTimeout(() => {
            setStatus('success');
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="h-[auto] min-h-screen md:h-screen flex flex-col snap-start bg-white">
            <div className="flex-grow flex items-center px-4 md:px-8 py-20 md:py-0">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-h2 text-ink mb-6">
                                Ready to build something clean and scalable?
                            </h2>
                            <p className="text-body text-ink/70 mb-10 max-w-md">
                                Whether you have a specific project in mind or just want to explore how we can help your team, we'd love to hear from you.
                            </p>

                            <div className="flex flex-col gap-4 mb-12">
                                <a
                                    href="mailto:rlopez.rjls@gmail.com"
                                    className="flex items-center gap-4 p-4 bg-brand-100/10 rounded-brand-md border border-brand-100 hover:border-brand-600 transition-colors group"
                                >
                                    <div className="p-3 bg-brand-100 opacity-50 rounded-lg group-hover:opacity-100 transition-opacity">
                                        <Mail size={24} className="text-brand-600" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-brand-600 uppercase">Email us</span>
                                        <p className="text-ink font-heading font-medium">rlopez.rjls@gmail.com</p>
                                    </div>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/robert-lopez-salazar/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 bg-brand-100/10 rounded-brand-md border border-brand-100 hover:border-brand-600 transition-colors group"
                                >
                                    <div className="p-3 bg-brand-100 opacity-50 rounded-lg group-hover:opacity-100 transition-opacity">
                                        <Linkedin size={24} className="text-brand-600" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-brand-600 uppercase">Connect on LinkedIn</span>
                                        <p className="text-ink font-heading font-medium">Robert López Salazar</p>
                                    </div>
                                </a>
                            </div>

                            <div className="flex gap-4">
                                <a href="https://github.com/rlopez2494" target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-brand-100 rounded-full text-ink/40 hover:text-brand-600 hover:border-brand-600 transition-all shadow-sm">
                                    <Github size={20} />
                                </a>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-brand-100/5 p-8 rounded-brand-lg border border-brand-100 shadow-xl shadow-brand-100/20"
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-bold uppercase text-ink/70">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-white border border-brand-100 rounded-brand-md focus:ring-2 focus:ring-brand-600 outline-none transition-all"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-bold uppercase text-ink/70">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-white border border-brand-100 rounded-brand-md focus:ring-2 focus:ring-brand-600 outline-none transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs font-bold uppercase text-ink/70">Message</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full px-4 py-3 bg-white border border-brand-100 rounded-brand-md focus:ring-2 focus:ring-brand-600 outline-none transition-all resize-none"
                                        placeholder="How can we help?"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status !== 'idle'}
                                    className="w-full py-4 bg-brand-600 text-white rounded-brand-md font-bold hover:bg-brand-800 disabled:opacity-50 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-brand-600/20"
                                >
                                    {status === 'idle' ? (
                                        <>Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                                    ) : status === 'submitting' ? (
                                        'Sending...'
                                    ) : (
                                        'Sent Successfully!'
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="py-10 border-t border-brand-100 px-4 md:px-8">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <Image
                            src={CrealoLogo}
                            alt="Créalo"
                            height={28}
                            className="w-auto h-6 mb-2"
                        />
                        <p className="text-xs text-ink/40 font-medium">© 2026 — Creative Engineering</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                        <p className="text-sm font-bold text-ink/80">Maturin, Venezuela</p>
                        <p className="text-sm text-ink/60">rlopez.rjls@gmail.com</p>
                    </div>
                </div>
            </footer>
        </section>
    );
}
