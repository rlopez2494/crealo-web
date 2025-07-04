import { Card } from "@/components/ui/card";
import AboutSection from "@/screens/Homepage/sections/AboutSection";
import ContactSection from "@/screens/Homepage/sections/ContactSection";
import PortfolioSection from "@/screens/Homepage/sections/PortfolioSection";
import ServicesSection from "@/screens/Homepage/sections/ServicesSection";
import SkillsSection from "@/screens/Homepage/sections/SkillsSection";
import TestimonialsSection from "@/screens/Homepage/sections/TestimonialsSection";
import Header from "@/components/Header";

import LinkedInIcon from "@/assets/icons/contact/linkedin.svg";
import UpworkIcon from "@/assets/icons/contact/upwork.svg";
import GithubIcon from "@/assets/icons/contact/github.svg";

const Homepage = () => {
  // Social media links data
  const socialLinks = [
    {
      id: "upwork",
      icon: (
        <img
          alt="Upwork svgrepo com"
          src={UpworkIcon}
        />
      ),
    },
    {
      id: "linkedin",
      icon: (
        <img
          alt="LinkedinIcon svgrepo com"
          src={LinkedInIcon}
        />
      ),
    },
    {
      id: "github",
      icon: (
        <img
          alt="LinkedinIcon svgrepo com"
          src={GithubIcon}
        />
      ),
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <Header></Header>

      {/* Main content sections */}
      <main className="flex flex-col w-full">
        <TestimonialsSection />
        <ServicesSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />

        {/* Social Media Footer */}
        <footer className="flex justify-center items-center h-[55px] w-full mt-4 mb-2">
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Card
                key={link.id}
                className="w-[33px] h-[33px] rounded-[16.4px] flex items-center justify-center bg-transparent border-none"
              >
                {link.icon}
              </Card>
            ))}
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Homepage;