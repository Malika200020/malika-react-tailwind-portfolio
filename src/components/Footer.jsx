import { ArrowUp } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8">
      <Reveal className="flex flex-wrap justify-between items-center" margin="0px">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} MalikaTech.co. All rights reserved.
        </p>
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-200 ease-snappy hover:-translate-y-0.5 active:scale-95"
        >
          <ArrowUp size={20} />
        </a>
      </Reveal>
    </footer>
  );
};
