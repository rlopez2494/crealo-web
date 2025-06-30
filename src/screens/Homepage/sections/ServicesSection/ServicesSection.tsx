import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesSection = () => {
  return (
    <section className="w-full py-16">
      <Card className="border-none">
        <CardContent className="p-5 space-y-4">
          <h2 className="font-text-title-2 text-[#bfc3d2] text-[length:var(--text-title-2-font-size)] tracking-[var(--text-title-2-letter-spacing)] leading-[var(--text-title-2-line-height)] font-[number:var(--text-title-2-font-weight)] [font-style:var(--text-title-2-font-style)]">
            ABOUT ME
          </h2>
          <p className="font-text-body-1 text-white text-[length:var(--text-body-1-font-size)] tracking-[var(--text-body-1-letter-spacing)] leading-[var(--text-body-1-line-height)] font-[number:var(--text-body-1-font-weight)] [font-style:var(--text-body-1-font-style)]">
            For over 5 years, I&apos;ve built digital solutions for real-world
            applications.
            <br />
            <br />
            Clarity, long-term maintainability and effective collaboration is
            the end-goal.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
