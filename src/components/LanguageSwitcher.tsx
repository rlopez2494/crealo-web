'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLanguage = (newLocale: 'en' | 'es') => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <div className="flex items-center gap-1 bg-brand-100/30 p-1 rounded-full border border-brand-100">
            <button
                onClick={() => switchLanguage('en')}
                className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${locale === 'en'
                        ? 'bg-white text-brand-600 shadow-sm'
                        : 'text-ink/40 hover:text-ink/60'
                    }`}
            >
                EN
            </button>
            <button
                onClick={() => switchLanguage('es')}
                className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${locale === 'es'
                        ? 'bg-white text-brand-600 shadow-sm'
                        : 'text-ink/40 hover:text-ink/60'
                    }`}
            >
                ES
            </button>
        </div>
    );
}
