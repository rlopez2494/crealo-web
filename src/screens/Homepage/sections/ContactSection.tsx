import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section className="px-5 pt-12 w-full h-[calc(100dvh-55px)]">
      <div className="w-full max-w-md mb-10">
        <p className="font-text-body-1 text-[#f1f7ff] text-[length:var(--text-body-1-font-size)] tracking-[var(--text-body-1-letter-spacing)] leading-[var(--text-body-1-line-height)]">
          We look forward to know you better.
        </p>
      </div>

      <div className="flex justify-center items-center">
        <Button className="w-[127px] h-[127px] rounded-full shadow-[3px_4px_4px_#00000040] flex items-center justify-center p-0 bg-[linear-gradient(90deg,rgba(0,32,51,1)_0%,rgba(48,6,63,1)_100%)]">
          <label className="font-text-title-1 text-[#f1f7ff] text-[length:var(--text-title-1-font-size)] text-center whitespace-normal tracking-[var(--text-title-1-letter-spacing)] leading-[var(--text-title-1-line-height)]">
            GET IN TOUCH
          </label>
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;