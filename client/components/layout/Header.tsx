import { useEffect, useState } from "react";
import { Menu, MoveRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  // { label: "Success Stories", href: "#testimonials" },
  { label: "Features", href: "#course-features" },
  { label: "Why Gateway Abroad?", href: "#trust" },
  { label: "FAQs", href: "#faqs" },
];

const logoSrc = "https://www.gatewayabroadeducations.com/images/logo.svg";

const Header = ({ visiable }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent('Hi, I want help with SAT preparation.');
    window.open(`https://wa.me/917023881046?text=${message}`, '_blank');
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isMenuOpen) {
      root.style.overflow = "hidden";
    } else {
      root.style.overflow = "";
    }

    return () => {
      root.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all",
        scrolled ? "bg-white shadow-header" : "bg-background/95 backdrop-blur",
      )}
    >
      <div className="container flex items-center justify-center md:justify-between gap-4 py-3 md:py-4">
        <a href="#hero" className="flex items-center gap-2" onClick={closeMenu}>
          <img
            src={logoSrc}
            alt="Gateway Abroad"
            className="h-11 w-auto md:h-11"
            loading="lazy"
            decoding="async"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {/* {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-foreground transition-colors hover:text-primary md:text-base"
            >
              {link.label}
            </a>
          ))} */}

          <button
            onClick={() => visiable(true)}
            className="group inline-flex items-center gap-2 rounded-xl bg-amber-400 border border-2 border-black text-black px-6 py-2 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-floating md:text-base cursor-pointer"
          >
            Book Now
            <MoveRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </button>
        </nav>

        {/* <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-foreground transition hover:border-primary/50 hover:text-primary md:hidden"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button> */}
      </div>
      {/* 
      <div
        className={cn(
          "md:hidden",
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="space-y-6 border-t border-border bg-white px-6 py-6 shadow-lg">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="block text-lg font-semibold text-foreground/90 transition hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#cta"
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 text-base font-semibold text-white shadow-floating transition hover:shadow-lg"
          >
            Book Free SAT Demo
          </a>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
