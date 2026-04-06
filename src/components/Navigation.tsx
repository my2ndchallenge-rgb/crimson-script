import { useState, useEffect } from "react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(".snap-container");
      if (container) {
        setScrolled(container.scrollTop > 50);
      }
    };

    const container = document.querySelector(".snap-container");
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-md" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-5 md:px-12">
        <button
          onClick={() => scrollTo("hero")}
          className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground hover:text-primary transition-colors"
        >
          극작가 포트폴리오
        </button>
        <div className="flex items-center gap-8">
          {[
            { label: "WORKS", id: "works" },
            { label: "ABOUT", id: "about" },
            { label: "CONTACT", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
