import { Button } from "@/components/ui/button";
import DownArrowIcon from "@/assets/icons/navigation/DownArrow.svg";

const PortfolioSection = () => {
  return (
    <section className="w-full min-h-[100dvh] py-10 flex flex-col justify-between">
      <p className="text-[#f1f7ff] font-text-body-1 text-[length:var(--text-body-1-font-size)] tracking-[var(--text-body-1-letter-spacing)] leading-[var(--text-body-1-line-height)] [font-style:var(--text-body-1-font-style)] mb-12">
        Are you looking for someone who embraces technical challenges while cooperating and collaborating with the mindsets on your team? Let&apos;s have a chat.
      </p>

      <a href="#page-footer" className="flex flex-col justify-center items-center">
        <Button
          size="icon"
          className="w-[33px] h-[33px] rounded-[16.4px] flex items-center justify-center mb-2 bg-[linear-gradient(90deg,#005097_0%,#701B8F_100%)]"
          aria-label="Scroll down"
        >
          <img width={20} height={20} alt="Arrow" src={DownArrowIcon} />
        </Button>

        <span className="text-[#f1f7ff] font-text-body-2 text-[length:var(--text-body-2-font-size)] tracking-[var(--text-body-2-letter-spacing)] leading-[var(--text-body-2-line-height)] [font-style:var(--text-body-2-font-style)] mt-2">
          Contact me
        </span>
      </a>
    </section>
  );
};

export default PortfolioSection;