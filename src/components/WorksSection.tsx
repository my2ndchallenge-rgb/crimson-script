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
            className="work-card group border-b border-border py-10 md:py-14 px-4 md:px-8 transition-colors duration-500 hover:bg-primary/5 cursor-pointer relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
              {/* Left content */}
              <div className="flex-1 min-w-0">
                <span className="text-xs font-medium text-muted-foreground tracking-[0.2em]">
                  {work.num}
                </span>
                <div className="flex items-center gap-8 mt-3 mb-5">
                  <h3 className="work-title font-korean font-normal text-xl md:text-2xl transition-colors duration-300 flex-shrink-0">
                    {work.title}
                  </h3>
                  <div className="w-48 h-32 md:w-72 md:h-48 flex-shrink-0 overflow-hidden rounded">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground border border-border px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Logline panel - slides in on hover (desktop), always visible below on mobile */}
              <div className="md:w-[45%] md:flex-shrink-0">
                <div className="logline-slide md:border-l md:border-primary md:pl-8 py-2 block md:group-hover:opacity-100 md:group-hover:translate-x-0">
                  {/* On mobile, always show */}
                  <p className="text-sm text-muted-foreground font-korean leading-relaxed md:hidden">
                    {work.logline}
                  </p>
                  {/* On desktop, slide in */}
                  <p className="text-sm text-muted-foreground font-korean leading-relaxed hidden md:block">
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
