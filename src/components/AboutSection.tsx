const AboutSection = () => {
  return (
    <section id="about" className="snap-section flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary mb-16">
        About
      </p>

      <div className="max-w-2xl">
        <h2 className="font-korean font-black text-3xl md:text-4xl mb-10">
          작품이 말하게 합니다
        </h2>
        <div className="space-y-6 text-secondary-foreground leading-relaxed font-korean">
          <p>
            25년간 한국 역사 드라마의 깊은 곳을 탐구해온 극작가입니다.
            역사의 기록 너머, 침묵 속에 묻힌 이야기를 발굴하여
            현대의 언어로 재구성합니다.
          </p>
          <p>
            신라부터 고조선까지, 시대를 관통하는 인간의 욕망과 운명을
            스크린 위에 펼칩니다. 모든 작품은 철저한 사료 연구를 바탕으로
            역사적 사실과 극적 상상력의 경계에서 탄생합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
