import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const SkillsSection = (): JSX.Element => {
  // Define the skill categories and their technologies
  const skillCategories = [
    {
      title: "Design & Collaboration",
      skills: [
        {
          name: "Figma",
          icon: "/figma-svgrepo-com--1--1.svg",
          iconWidth: "w-[34px]",
          iconHeight: "h-[34px]",
        },
        {
          name: "Trello",
          icon: "/group-50.png",
          iconWidth: "w-6",
          iconHeight: "h-6",
        },
      ],
    },
    {
      title: "Frontend",
      skills: [
        {
          name: "Vue",
          icon: "/vue.png",
          iconWidth: "w-[30px]",
          iconHeight: "h-[26px]",
        },
        {
          name: "React",
          icon: "/vector-1.svg",
          iconWidth: "w-[37px]",
          iconHeight: "h-[33px]",
        },
        {
          name: "Storybook",
          icon: "/mask-group.png",
          iconWidth: "w-6",
          iconHeight: "h-[30px]",
        },
        {
          name: "Shopify",
          icon: "/color--1.png",
          iconWidth: "w-6",
          iconHeight: "h-7",
        },
        {
          name: "Tailwind",
          icon: "/tailwind-svgrepo-com-1.svg",
          iconWidth: "w-9",
          iconHeight: "h-9",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node",
          icon: "/node-js-svgrepo-com-1.svg",
          iconWidth: "w-9",
          iconHeight: "h-9",
        },
        {
          name: "Firebase",
          icon: "/firebase-svgrepo-com-1.svg",
          iconWidth: "w-[38px]",
          iconHeight: "h-[38px]",
        },
        {
          name: "Express",
          icon: "/group-51.png",
          iconWidth: "w-7",
          iconHeight: "h-7",
        },
        {
          name: "Shopify",
          icon: "/color--2.png",
          iconWidth: "w-6",
          iconHeight: "h-7",
        },
      ],
    },
    {
      title: "Fullstack",
      skills: [
        {
          name: "Javascript",
          icon: "/group-52.png",
          iconWidth: "w-[26px]",
          iconHeight: "h-[26px]",
        },
        {
          name: "Typescript",
          icon: "/typescript-svgrepo-com-1.svg",
          iconWidth: "w-[26px]",
          iconHeight: "h-[26px]",
        },
        {
          name: "Jest",
          icon: "/jest-snapshot-svgrepo-com-1.svg",
          iconWidth: "w-[26px]",
          iconHeight: "h-[26px]",
        },
        {
          name: "Vitest",
          icon: "/vite-svgrepo-com-1.svg",
          iconWidth: "w-[30px]",
          iconHeight: "h-[30px]",
        },
      ],
    },
  ];

  return (
    <section className="w-full py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="font-text-title-2 font-[number:var(--text-title-2-font-weight)] text-[#bfc3d2] text-[length:var(--text-title-2-font-size)] tracking-[var(--text-title-2-letter-spacing)] leading-[var(--text-title-2-line-height)] [font-style:var(--text-title-2-font-style)] mb-8">
          OUR DELIVERY STACK
        </h2>

        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-none bg-transparent">
              <CardContent className="p-0">
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
                        {skill.icon.endsWith(".png") ||
                        skill.icon.endsWith(".svg") ? (
                          <img
                            src={skill.icon}
                            alt={`${skill.name} icon`}
                            className={`${skill.iconWidth} ${skill.iconHeight}`}
                          />
                        ) : (
                          <div
                            className={`${skill.iconWidth} ${skill.iconHeight} bg-[url(${skill.icon})] bg-[100%_100%]`}
                          />
                        )}
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
      </div>
    </section>
  );
};
