import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact-me" className="pt-20 w-full h-[calc(100dvh-55px)] relative">
      <div className="w-full max-w-md mb-10">
        <p className="font-text-body-1 text-[#f1f7ff] text-[length:var(--text-body-1-font-size)] tracking-[var(--text-body-1-letter-spacing)] leading-[var(--text-body-1-line-height)]">
          We look forward to know you better.
        </p>
      </div>

      <div className="flex justify-center items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-[55px]">
        <a href="mailto:rlopez.rjls@gmail.com" aria-label="Send me an email">
          <Button className="w-[127px] h-[127px] rounded-full shadow-[3px_4px_4px_#00000040] flex items-center justify-center p-0 bg-[linear-gradient(180deg,#005097_0%,#701B8F_100%)]">
            <label className="font-text-title-1 text-[#f1f7ff] text-[length:var(--text-title-1-font-size)] text-center whitespace-normal tracking-[var(--text-title-1-letter-spacing)] leading-[var(--text-title-1-line-height)]">
              GET IN TOUCH
            </label>
          </Button>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;