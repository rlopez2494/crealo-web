import { Card, CardContent } from "@/components/ui/card";
import SurRealIcon from "@/assets/icons/portfolio/SurReal.svg";
import LightEdisonIcon from "@/assets/icons/portfolio/LightEdison.svg";
import HangoverReliefIcon from "@/assets/icons/portfolio/HangoverRelief.svg";
import ShareIcon from "@/assets/icons/navigation/Share.svg";

const AboutSection = () => {
  const clients = [
    {
      id: 2,
      name: "LightEdison",
      achievements: [
        "Designed and developed internal tools to digitize manual processes across HR, accounting, and field operations teams.",
        "Implemented key systems such as a Time & Expense Tracker, onboarding/training checklists, and internal CRMs.",
        "Used Vue.js with Vuetify, Firebase (Firestore, Functions, Auth, Storage), and Google APIs (Docs, Sheets, Calendar, Gmail).",
        "Applied Clean Architecture and Test Driven Development to scale codebase and separate business logic from infrastructure.",
        "Collaborated with the CEO and department leads to validate problems and iterate on solutions based on real user feedback.",
      ],
      logoSource: LightEdisonIcon,
      logoAltText: "lightedison--icon",
      url: "https://www.lightedison.com/"
    },
    {
      id: 1,
      name: "Sur Real Travel",
      achievements: [
        "Designed a Firestore database and Firebase Storage structure for a dynamic travel experiences website.",
        "Developed a lightweight admin panel for content management (images, videos, text, availability).",
        "Migrated the existing Vue-based website to integrate with real-time database content.",
      ],
      logoSource: SurRealIcon,
      logoAltText: "sur-real-travel--icon",
      url: "https://www.surreal.travel/"
    },
    {
      id: 3,
      name: "Caigua Web Agency",
      achievements: [
        "Deep customization of Shopify and WordPress themes based on Figma designs using HTML, CSS, and JavaScript.",
        "Integration of editable elements in Shopify’s Theme Editor using Liquid, enabling clients to manage key components themselves.",
        "Used Shopify CLI and GitHub for version control and local development.",
        "Built UI interactions in vanilla JavaScript, which helped strengthen my understanding of the DOM and core frontend principles.",
      ],
      logoSource: HangoverReliefIcon,
      logoAltText: "latitude--icon",
      url: "https://latitudecoffee.com/"
    },
  ];

  return (
    <section className="w-full py-10 min-h-[100dvh]">
      <h2
        className="
          font-text-title-2 
          font-[number:var(--text-title-2-font-weight)] 
          text-[#bfc3d2] 
          text-[length:var(--text-title-2-font-size)] 
          tracking-[var(--text-title-2-letter-spacing)] 
          leading-[var(--text-title-2-line-height)] 
          [font-style:var(--text-title-2-font-style)] 
          mb-6
        ">
        OUR CLIENTS &amp; PARTNERSHIPS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {clients.map((client) => (
          <article>
            <Card
              className="
                  rounded-[10px] 
                  xs:my-6 p-5 
                  shadow-[3px_4px_4px_#00000040] 
                  bg-[linear-gradient(180deg,#002033_0%,#701B8F_100%)]
                  max-h-[320px]

                  
                  overflow-y-hidden
                  hover:max-h-[800px]
                  hover:scale-[1.01]
                  transition-all duration-500 ease-in-out
                  relative
                  group
                "
            >
              <CardContent className="flex-col justify-center">
                <a href={client.url} target="_blank" rel="noopener noreferrer" key={client.id}>
                  <div className="pl-6 mx-auto flex items-center mb-3">
                    <img
                      className="w-[40px]"
                      alt={client.logoAltText}
                      src={client.logoSource}
                    />

                    <h3
                      className="
                      ml-3
                      font-text-title-3 
                      font-[number:var(--text-title-3-font-weight)] 
                      text-[#f1f7ff] 
                      text-[length:var(--text-title-3-font-size)] 
                      tracking-[var(--text-title-3-letter-spacing)] 
                      leading-[var(--text-title-3-line-height)] 
                      whitespace-nowrap
                      [font-style:var(--text-title-3-font-style)]
                  ">
                      {client.name}
                    </h3>

                    <img className="ml-3" width={15} height={15} alt="Arrow" src={ShareIcon} />
                  </div>
                </a>
                <div className="pl-6">
                  <ul className="list-disc text-[#d9eaff] mt-8">
                    {
                      client.achievements.map(achievement => (
                        <li className="my-3">
                          <p className="m-0">{achievement}</p>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </CardContent>

              {/* Bottom gradient overlay that fades out text */}
              <div className="
                  absolute bottom-0 left-0 right-0 h-20 
                  bg-gradient-to-t from-[#701B8F] to-transparent
                  pointer-events-none
                  group-hover:opacity-0
                  transition-opacity duration-500 ease-in-out
                "></div>
            </Card>
          </article>
        ))}
      </div>
    </section >
  );
};

export default AboutSection;
