'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import Upwork from '@/assets/icons/contact/Upwork';
import Image from 'next/image';
import CrealoLogo from '@/assets/icons/Crealo.svg';
import ContactLinkCard from '@/components/ui/contact-link-card';
import { useTranslations } from 'next-intl';

export default function ContactSection() {
    const t = useTranslations('Contact');

    return (
        <section id="contact" className="h-[auto] min-h-screen md:h-screen flex flex-col snap-start bg-white">
            <div className="flex-grow flex items-center px-4 md:px-8 py-20 md:py-0">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="grid grid-cols-1 gap-16 items-start">

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-h2 text-ink mb-6">
                                {t('title')}
                            </h2>
                            <p className="text-body text-ink/70 mb-10 max-w-md">
                                {t('description')}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                                <ContactLinkCard
                                    icon={Upwork}
                                    url="https://www.upwork.com/freelancers/~0120b8f984c4f5e3eb?viewMode=1"
                                    title={t('cards.upwork')}
                                    description="Robert L."
                                />

                                <ContactLinkCard
                                    icon={Linkedin}
                                    url="https://www.linkedin.com/in/robert-lopez-salazar/"
                                    title={t('cards.linkedin')}
                                    description="Robert López Salazar"
                                />

                                <ContactLinkCard
                                    icon={Mail}
                                    url="mailto:rlopez.rjls@gmail.com"
                                    title={t('cards.email')}
                                    description="rlopez.rjls@gmail.com"
                                />

                                <ContactLinkCard
                                    icon={Github}
                                    url="https://github.com/rlopez2494"
                                    title={t('cards.github')}
                                    description="rlopez2494"
                                />
                            </div>
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
                        <p className="text-sm font-bold text-ink/80">{t('footer.location')}</p>
                        <p className="text-sm text-ink/60">rlopez.rjls@gmail.com</p>
                    </div>
                </div>
            </footer>
        </section>
    );
}
