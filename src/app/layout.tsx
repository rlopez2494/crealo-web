import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const sora = Sora({
    subsets: ['latin'],
    variable: '--font-sora',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Créalo — Creative Engineering',
    description: 'Boutique studio helping ambitious teams build fast, ship clean, and scale confidently.',
    keywords: ['software development', 'creative engineering', 'portfolio', 'boutique studio', 'Maturin', 'Venezuela'],
    openGraph: {
        title: 'Créalo — Creative Engineering',
        description: 'Boutique studio helping ambitious teams build fast, ship clean, and scale confidently.',
        type: 'website',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${sora.variable}`}>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
