export function Hero() {
  const heroImage = `${import.meta.env.BASE_URL}images/works/010rikuHalloween.PNG`;

  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">official site & portfolio</p>
        <h1>satomuraworks</h1>
        <p>
          イラスト、デザイン素材、キャラクター作品などを掲載している、佐藤み。本人の公式サイトです。
          ご依頼・販売ページ・SNSは、公式リンクからご確認ください。
        </p>
      </div>
      <div className="hero-visual" aria-label="ハロウィン衣装キャラクター">
        <img src={heroImage} alt="ハロウィン衣装キャラクター" />
      </div>
    </section>
  );
}
