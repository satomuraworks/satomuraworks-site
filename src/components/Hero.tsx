export function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Illustration / Design / Web</p>
        <h1>やさしい表現で、伝わるかたちをつくる。</h1>
        <p>
          個人クリエイターとして、イラスト・デザイン・Web制作を中心に活動しています。
          作品の雰囲気と制作できることがひと目で伝わる公式サイトです。
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#works">
            Worksを見る
          </a>
          <a className="button secondary" href="#contact">
            相談する
          </a>
        </div>
      </div>
      <div className="hero-visual" aria-label="作品イメージ">
        <img src="/assets/hero-visual.svg" alt="" />
      </div>
    </section>
  );
}
