const works = [
  {
    num: "01",
    title: "악의 꽃",
    tags: ["신라", "Historical Fantasy", "Pilot Complete"],
    logline: "— 로그라인 준비 중",
    image: "/images/work-01.jpg",
  },
  {
    num: "02",
    title: "원화",
    tags: ["신라", "Historical Drama", "Pilot Complete"],
    logline: "— 로그라인 준비 중",
    image: "/images/work-02.jpg",
  },
  {
    num: "03",
    title: "단 하나의 꿈",
    tags: ["고조선–삼한", "Epic Series", "In Development"],
    logline: "— 로그라인 준비 중",
    image: "/images/work-03.jpg",
  },
];

const WorksSection = () => {
  return (
    <section id="works" className="snap-section flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-16">
        Selected Works
      </p>

      <div className="border-t border-border">
        {works.map((work) => (
          <div
            key={work.num}
            className="work-card group border-b border-border cursor-pointer relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              {/* Left: background image area */}
              <div className="relative flex-1 min-w-0 py-10 md:py-14 px-6 md:px-10">
                {/* Background image */}
                <img
                  src={work.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover saturate-[0.5] contrast-[1.1] brightness-[0.3] blur-[2px] group-hover:brightness-[0.45] group-hover:blur-[1px] transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/60" />

                {/* Content over image */}
                <div className="relative z-10">
                  <span className="text-xs font-medium text-white/60 tracking-[0.2em]">
                    {work.num}
                  </span>
                  <h3 className="work-title font-korean font-normal text-xl md:text-2xl text-white mt-3 mb-5 transition-colors duration-300">
                    {work.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-[0.15em] text-white/70 border border-white/20 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: logline panel */}
              <div className="md:w-[35%] md:flex-shrink-0 py-6 md:py-14 px-6 md:px-10">
                <div className="logline-slide md:border-l md:border-primary md:pl-8 py-2 block md:group-hover:opacity-100 md:group-hover:translate-x-0">
                  <p className="text-sm text-muted-foreground font-korean leading-relaxed">
                    {work.logline}
                  </p>
                </div>
              </div>
            </div>

            {/* VIEW arrow */}
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10">
              <span className="view-arrow text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-all duration-300">
                VIEW →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorksSection;
