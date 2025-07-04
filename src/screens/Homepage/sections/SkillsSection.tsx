import { Card, CardContent } from "@/components/ui/card";
import ExpressIcon from "@/assets/icons/skills/express.svg";
import NodeIcon from "@/assets/icons/skills/node.svg";
import TypescriptIcon from "@/assets/icons/skills/typescript.svg";
import JestIcon from "@/assets/icons/skills/jest.svg";
import Vite from "@/assets/icons/skills/vite.svg";
import JavascriptIcon from "@/assets/icons/skills/javascript.svg";
import TailwindIcon from "@/assets/icons/skills/tailwind.svg";
import FigmaIcon from "@/assets/icons/skills/figma.svg";
import TrelloIcon from "@/assets/icons/skills/trello.svg";
import VueIcon from "@/assets/icons/skills/vue.svg";
import ReactIcon from "@/assets/icons/skills/react.svg";
import StorybookIcon from "@/assets/icons/skills/storybook.svg";
import ShopifyIcon from "@/assets/icons/skills/shopify.svg";
import FirebaseIcon from "@/assets/icons/skills/firebase.svg";

const SkillsSection = () => {
  // Define the skill categories and their technologies
  const skillCategories = [
    {
      title: "Design & Collaboration",
      skills: [
        {
          name: "Figma",
          icon: FigmaIcon,
        },
        {
          name: "Trello",
          icon: TrelloIcon,
        },
      ],
    },
    {
      title: "Frontend",
      skills: [
        {
          name: "Vue",
          icon: VueIcon,
        },
        {
          name: "React",
          icon: ReactIcon,
        },
        {
          name: "Storybook",
          icon: StorybookIcon,
        },
        {
          name: "Shopify",
          icon: ShopifyIcon,
        },
        {
          name: "Tailwind",
          icon: TailwindIcon,
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node",
          icon: NodeIcon,
        },
        {
          name: "Firebase",
          icon: FirebaseIcon,
        },
        {
          name: "Express",
          icon: ExpressIcon,
        },
        {
          name: "Shopify",
          icon: ShopifyIcon,
        },
      ],
    },
    {
      title: "Fullstack",
      skills: [
        {
          name: "Javascript",
          icon: JavascriptIcon,
        },
        {
          name: "Typescript",
          icon: TypescriptIcon,
        },
        {
          name: "Jest",
          icon: JestIcon,
        },
        {
          name: "Vitest",
          icon: Vite,
        },
      ],
    },
  ];

  return (
    <section className="w-full h-[100dvh] px-5 py-10">
      <h2 className="font-text-title-2 font-[number:var(--text-title-2-font-weight)] text-[#bfc3d2] text-[length:var(--text-title-2-font-size)] tracking-[var(--text-title-2-letter-spacing)] leading-[var(--text-title-2-line-height)] [font-style:var(--text-title-2-font-style)] mb-8">
        OUR DELIVERY STACK
      </h2>

      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <Card key={index} className="border-none bg-transparent">
            <CardContent>
              <h3 className="font-text-title-4 font-[number:var(--text-title-4-font-weight)] text-white text-[length:var(--text-title-4-font-size)] tracking-[var(--text-title-4-letter-spacing)] leading-[var(--text-title-4-line-height)] underline mb-4 [font-style:var(--text-title-4-font-style)]">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center"
                  >
                    <div className="w-[46px] h-[46px] rounded-full bg-[url(/ellipse-2.svg)] bg-[100%_100%] flex items-center justify-center">
                      <img
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                      />
                    </div>
                    <span className="font-text-body-3 font-[number:var(--text-body-3-font-weight)] text-[#f1f7ff] text-[length:var(--text-body-3-font-size)] tracking-[var(--text-body-3-letter-spacing)] leading-[var(--text-body-3-line-height)] mt-2 [font-style:var(--text-body-3-font-style)]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;