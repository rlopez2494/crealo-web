import React from "react";
import { Card } from "../../components/ui/card";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { PortfolioSection } from "./sections/PortfolioSection";
import { ServicesSection } from "./sections/ServicesSection";
import { SkillsSection } from "./sections/SkillsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const Homepage = (): JSX.Element => {
  // Social media links data
  const socialLinks = [
    {
      id: "upwork",
      icon: (
        <img
          className="w-5 h-5 mx-auto my-[7px]"
          alt="Upwork svgrepo com"
          src="/upwork-svgrepo-com-1.svg"
        />
      ),
    },
    {
      id: "linkedin",
      icon: (
        <img
          className="w-[26px] h-[26px] mx-auto my-1"
          alt="LinkedinIcon svgrepo com"
          src="/linkedin-svgrepo-com-1.svg"
        />
      ),
    },
    {
      id: "github",
      icon: (
        <div className="relative w-[22px] h-[22px] mx-auto my-1.5 bg-[url(/color-.png)] bg-[100%_100%]" />
      ),
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full">
        <div className="relative bg-[#1b1a1a]">
          {/* Header */}
          <header className="w-full flex justify-center">
            <div className="w-[167px] h-[67px] bg-transparent rounded-[0px_0px_10px_10px] overflow-hidden bg-[linear-gradient(90deg,rgba(0,32,51,1)_0%,rgba(48,6,63,1)_100%)] flex items-center justify-center">
              <div className="font-text-body-2 font-[number:var(--text-body-2-font-weight)] text-[#edeef2] text-[length:var(--text-body-2-font-size)] tracking-[var(--text-body-2-letter-spacing)] leading-[var(--text-body-2-line-height)] whitespace-nowrap [font-style:var(--text-body-2-font-style)]">
                Robert López
              </div>
            </div>
          </header>

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
      </div>
    </div>
  );
};
