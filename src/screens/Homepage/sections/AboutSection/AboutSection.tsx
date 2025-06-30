import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutSection = (): JSX.Element => {
  // Client data for mapping
  const clients = [
    {
      id: 1,
      name: "Sur Real Travel",
      description:
        "Streamlining manual processes and SOPs into digital solutions",
      logo: (
        <div className="relative w-[50px] h-[30px] top-[21px] left-[13px]">
          <div className="relative w-[47px] h-7 top-px left-px">
            <img
              className="absolute w-[7px] h-2 top-0 left-0"
              alt="Group"
              src="/group.png"
            />
            <img
              className="absolute w-[17px] h-1.5 top-0 left-[15px]"
              alt="Group"
              src="/group-1.png"
            />
            <img
              className="absolute w-[7px] h-2 top-0 left-10"
              alt="Group"
              src="/group-2.png"
            />
            <img
              className="absolute w-[46px] h-[25px] top-0 left-0"
              alt="Group"
              src="/group-3.png"
            />
            <img
              className="absolute w-[3px] h-[3px] top-[11px] left-[9px]"
              alt="Group"
              src="/group-4.png"
            />
            <img
              className="absolute w-[3px] h-[3px] top-[11px] left-[35px]"
              alt="Group"
              src="/group-5.png"
            />
            <img
              className="absolute w-[9px] h-2.5 top-[18px] left-[39px]"
              alt="Group"
              src="/group-6.png"
            />
            <img
              className="absolute w-[9px] h-2.5 top-[18px] left-0"
              alt="Group"
              src="/group-7.png"
            />
            <img
              className="absolute w-[9px] h-[7px] top-[21px] left-[13px]"
              alt="Group"
              src="/group-8.png"
            />
            <img
              className="absolute w-[9px] h-[7px] top-[21px] left-[25px]"
              alt="Group"
              src="/group-9.png"
            />
          </div>
        </div>
      ),
    },
    {
      id: 2,
      name: "LightEdison",
      description:
        "Streamlining manual processes and SOPs into digital solutions",
      logo: (
        <div className="relative w-[27px] h-[33px] top-5 left-6 overflow-hidden bg-[url(/group-11.png)] bg-[100%_100%]">
          <div className="relative h-[34px]">
            <div className="absolute w-[18px] h-[25px] top-0 left-[9px] bg-[url(/group-12.png)] bg-[100%_100%]">
              <div className="absolute w-4 h-2 top-0 left-0.5 bg-[url(/group-13.png)] bg-[100%_100%]">
                <img
                  className="absolute w-2 h-[9px] top-0 left-2"
                  alt="Group"
                  src="/group-14.png"
                />
              </div>
              <img
                className="absolute w-2 h-px top-[9px] left-2.5"
                alt="Group"
                src="/group-15.png"
              />
              <div className="absolute w-4 h-[9px] top-3 left-0.5">
                <img
                  className="absolute w-4 h-px top-0 left-0"
                  alt="Group"
                  src="/group-16.png"
                />
                <img
                  className="absolute w-4 h-2 top-px left-px"
                  alt="Group"
                  src="/group-17.png"
                />
                <img
                  className="absolute w-4 h-2 top-0 left-0"
                  alt="Group"
                  src="/group-18.png"
                />
                <img
                  className="absolute w-2 h-2 top-0 left-2"
                  alt="Group"
                  src="/group-19.png"
                />
              </div>
              <img
                className="absolute w-2 h-px top-[21px] left-2.5"
                alt="Group"
                src="/group-20.png"
              />
            </div>
            <div className="absolute w-3 h-3 top-[22px] left-0">
              {/* Multiple small image elements for the logo */}
              {Array.from({ length: 29 }).map((_, index) => (
                <img
                  key={`group-${index + 21}`}
                  className="absolute w-px h-px"
                  style={{
                    top: Math.floor(index / 5) * 2 + "px",
                    left: (index % 5) * 2 + "px",
                  }}
                  alt="Group"
                  src={`/group-${index + 21}.png`}
                />
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      name: "Latitude 23.5",
      description:
        "Streamlining manual processes and SOPs into digital solutions",
      logo: (
        <img
          className="w-[51px] h-[51px] bg-blend-color-dodge object-cover"
          alt="Latitude coffee"
          src="/latitude-23-5-coffee-tea---logo-1.png"
        />
      ),
    },
    {
      id: 4,
      name: "Sur Real Travel",
      description:
        "Streamlining manual processes and SOPs into digital solutions",
      logo: <img className="w-12 h-12" alt="Group" src="/group-10.png" />,
    },
  ];

  return (
    <section className="w-full py-6 px-5 md:px-8 lg:px-12">
      <h2 className="font-text-title-2 font-[number:var(--text-title-2-font-weight)] text-[#bfc3d2] text-[length:var(--text-title-2-font-size)] tracking-[var(--text-title-2-letter-spacing)] leading-[var(--text-title-2-line-height)] [font-style:var(--text-title-2-font-style)] mb-6">
        OUR CLIENTS &amp; PARTNERSHIPS
      </h2>

      <div className="flex flex-col gap-4 max-w-md mx-auto">
        {clients.map((client) => (
          <Card
            key={client.id}
            className="rounded-[10px] shadow-[3px_4px_4px_#00000040] bg-[linear-gradient(45deg,rgba(0,54,83,1)_0%,rgba(79,16,102,1)_100%)]"
          >
            <CardContent className="p-0 flex items-center">
              <div className="w-[73px] h-[73px] flex items-center justify-center">
                {client.logo}
              </div>
              <div className="pl-6">
                <h3 className="[-webkit-text-stroke:1.2px_#000000] font-text-title-3 font-[number:var(--text-title-3-font-weight)] text-[#f1f7ff] text-[length:var(--text-title-3-font-size)] tracking-[var(--text-title-3-letter-spacing)] leading-[var(--text-title-3-line-height)] whitespace-nowrap [font-style:var(--text-title-3-font-style)]">
                  {client.name}
                </h3>
                <p className="mt-2 [-webkit-text-stroke:1.2px_#000000] font-text-body-3 font-[number:var(--text-body-3-font-weight)] text-[#d9eaff] text-[length:var(--text-body-3-font-size)] tracking-[var(--text-body-3-letter-spacing)] leading-[var(--text-body-3-line-height)] [font-style:var(--text-body-3-font-style)]">
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
