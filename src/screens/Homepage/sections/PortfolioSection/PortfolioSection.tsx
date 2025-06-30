import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const PortfolioSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 flex flex-col items-center justify-center text-[#f1f7ff]">
      <Card className="w-full max-w-[375px] bg-transparent border-none">
        <CardContent className="flex flex-col items-center p-0">
          <p className="font-text-body-1 text-[length:var(--text-body-1-font-size)] tracking-[var(--text-body-1-letter-spacing)] leading-[var(--text-body-1-line-height)] [font-style:var(--text-body-1-font-style)] mb-12 max-w-[337px] text-center">
            If you have a project in mind, or are looking for a valuable member
            on your engineering team. Let&apos;s talk.
          </p>

          <div className="flex flex-col items-center mt-auto">
            <Button
              variant="outline"
              size="icon"
              className="w-[33px] h-[33px] rounded-[16.4px] flex items-center justify-center mb-2"
              aria-label="Scroll down"
            >
              <img className="w-[15px] h-2" alt="Arrow" src="/arrow-1.svg" />
            </Button>

            <span className="font-text-body-2 text-[length:var(--text-body-2-font-size)] tracking-[var(--text-body-2-letter-spacing)] leading-[var(--text-body-2-line-height)] [font-style:var(--text-body-2-font-style)] mt-2">
              Contact me
            </span>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
