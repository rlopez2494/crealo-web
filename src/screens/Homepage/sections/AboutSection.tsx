import { Card, CardContent } from "@/components/ui/card";
import SurRealIcon from "@/assets/icons/portfolio/SurReal.svg";
import LightEdisonIcon from "@/assets/icons/portfolio/LightEdison.svg";
import LatitudeCoffeeIcon from "@/assets/icons/portfolio/LatitudeCoffee.svg";
import HangoverReliefIcon from "@/assets/icons/portfolio/HangoverRelief.svg";

const AboutSection = () => {
  const clients = [
    {
      id: 1,
      name: "Sur Real Travel",
      description:
        "Streamlining manual processes and SOPs into digital solutions",
      logoSource: SurRealIcon,
      logoAltText: "sur-real-travel--icon"
    },
    {
      id: 2,
      name: "LightEdison",
      description: "Streamlining manual processes and SOPs into digital solutions",
      logoSource: LightEdisonIcon,
      logoAltText: "lightedison--icon"
    },
    {
      id: 3,
      name: "Latitude 23.5",
      description: "Streamlining manual processes and SOPs into digital solutions",
      logoSource: LatitudeCoffeeIcon,
      logoAltText: "latitude--icon"
    },
    {
      id: 4,
      name: "Sur Real Travel",
      description: "Streamlining manual processes and SOPs into digital solutions",
      logoSource: HangoverReliefIcon,
      logoAltText: "caigua--icon"
    },
  ];

  return (
    <section className="w-full px-5 py-10 h-[100dvh]">
      <h2 className="font-text-title-2 font-[number:var(--text-title-2-font-weight)] text-[#bfc3d2] text-[length:var(--text-title-2-font-size)] tracking-[var(--text-title-2-letter-spacing)] leading-[var(--text-title-2-line-height)] [font-style:var(--text-title-2-font-style)] mb-6">
        OUR CLIENTS &amp; PARTNERSHIPS
      </h2>

      <div className="flex flex-col gap-4 max-w-md mx-auto">
        {clients.map((client) => (
          <Card
            key={client.id}
            className="rounded-[10px] shadow-[3px_4px_4px_#00000040] bg-[linear-gradient(45deg,rgba(0,54,83,1)_0%,rgba(79,16,102,1)_100%)]"
          >
            <CardContent className="flex items-center">
              <div className="w-[73px] h-[73px] flex items-center justify-center">
                <img
                  className="w-[40px]"
                  alt={client.logoAltText}
                  src={client.logoSource}
                />
              </div>
              <div className="pl-6">
                <h3 className="font-text-title-3 font-[number:var(--text-title-3-font-weight)] text-[#f1f7ff] text-[length:var(--text-title-3-font-size)] tracking-[var(--text-title-3-letter-spacing)] leading-[var(--text-title-3-line-height)] whitespace-nowrap [font-style:var(--text-title-3-font-style)]">
                  {client.name}
                </h3>
                <p className="mt-2 font-text-body-3 font-[number:var(--text-body-3-font-weight)] text-[#d9eaff] text-[length:var(--text-body-3-font-size)] tracking-[var(--text-body-3-letter-spacing)] leading-[var(--text-body-3-line-height)] [font-style:var(--text-body-3-font-style)]">
                  {client.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
