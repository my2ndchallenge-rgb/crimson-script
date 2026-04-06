const HeroSection = () => {
  return (
    <section
      id="hero"
      className="snap-section relative flex flex-col items-center justify-center grid-overlay"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary mb-8">
          Screenwriter · Original IP
        </p>

        <h1 className="font-korean font-normal text-2xl md:text-3xl lg:text-4xl leading-tight max-w-4xl whitespace-nowrap">
          <span className="text-foreground">BC와 AD 사이, 신화에서 역사로 —</span>
          <br />
          <span className="text-primary text-glow">잉클링스, 중앙</span>
        </h1>

        <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
          25 Years of Historical Drama
        </p>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-12 flex flex-col items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Scroll
        </span>
        <div className="scroll-hint-line" />
      </div>
    </section>
  );
};

export default HeroSection;
