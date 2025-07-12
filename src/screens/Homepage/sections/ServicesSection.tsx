import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  return (
    <section className="w-full min-h-[100dvh] py-10">
      <Card>
        <CardContent>
          <h2 className="font-text-title-2 text-[#bfc3d2] text-[length:var(--text-title-2-font-size)] tracking-[var(--text-title-2-letter-spacing)] leading-[var(--text-title-2-line-height)] font-[number:var(--text-title-2-font-weight)] [font-style:var(--text-title-2-font-style)]">
            ABOUT ME
          </h2>
          <p className="font-text-body-1 text-white text-[length:var(--text-body-1-font-size)] tracking-[var(--text-body-1-letter-spacing)] leading-[var(--text-body-1-line-height)] font-[number:var(--text-body-1-font-weight)] [font-style:var(--text-body-1-font-style)]">
            From designing and implementing ERP oriented features to refactoring large e-commerce codebases, I have increased operational efficiency by organizing teams into providing validated and iterative solutions.
            <br />
            <br />I value customer satisfaction, team work and fostering adaptability in the systems I build.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default ServicesSection;