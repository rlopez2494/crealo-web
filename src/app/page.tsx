import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import StackSection from '@/components/sections/StackSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
    return (
        <main className="md:snap-y md:snap-mandatory md:h-screen md:overflow-y-scroll scroll-smooth">
            <Header />

            <div className="snap-start">
                <HeroSection />
            </div>

            <div className="snap-start">
                <AboutSection />
            </div>

            <div className="snap-start">
                <CaseStudiesSection />
            </div>

            <div className="snap-start">
                <StackSection />
            </div>

            <div className="snap-start">
                <ContactSection />
            </div>
        </main>
    );
}
