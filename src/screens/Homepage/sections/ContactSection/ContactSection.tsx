import React from "react";
import { Button } from "../../../../components/ui/button";

export const ContactSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center w-full py-20 relative">
      <div className="w-full max-w-md px-5 mb-10">
        <p className="font-text-body-1 text-[#f1f7ff] text-[length:var(--text-body-1-font-size)] tracking-[var(--text-body-1-letter-spacing)] leading-[var(--text-body-1-line-height)]">
          We look forward to know you better.
        </p>
      </div>

      <Button className="w-[127px] h-[127px] rounded-full shadow-[3px_4px_4px_#00000040] flex items-center justify-center p-0 bg-transparent border border-[#f1f7ff] hover:bg-[#f1f7ff10]">
        <span className="font-text-title-1 text-[#f1f7ff] text-[length:var(--text-title-1-font-size)] text-center tracking-[var(--text-title-1-letter-spacing)] leading-[var(--text-title-1-line-height)]">
          GET IN TOUCH
        </span>
      </Button>
    </section>
  );
};
