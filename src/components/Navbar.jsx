import { cn } from "@/lib/utils";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useScrollLock } from "@/hooks/use-scroll-lock";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Education", href: "#education" },
  { name: "Beyond the Code", href: "#beyond" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Fixed: was window.screenY
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useScrollLock(isMenuOpen);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-200 ease-snappy",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-lg border-b border-border/50"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center relative z-10"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Malika's</span>{" "}
            Portfolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-200 ease-snappy relative z-10"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center">
          {/* theme toggle — visible on all screen sizes */}
          <button
            onClick={toggleTheme}
            className="p-2 text-foreground relative z-50 transition-transform duration-200 ease-snappy hover:scale-110 active:scale-95"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun size={20} className="text-yellow-300" /> : <Moon size={20} className="text-blue-900 dark:text-foreground" />}
          </button>

          {/* mobile nav toggle */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground relative z-45"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* mobile nav menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40",
            "transition-all duration-200 ease-snappy md:hidden",
            "flex flex-col items-center justify-center",
            isMenuOpen
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          )}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: '100vh',
            width: '100vw',
          }}
        >
          <div className="flex flex-col space-y-8 text-xl items-center">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 ease-snappy"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};