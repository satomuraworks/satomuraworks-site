export function About() {
  return (
    <section className="section about-section profile-detail-section">
      <div className="about-content">
        <p>
          佐藤み。は、イラスト・デザイン素材・キャラクター作品を制作している個人クリエイターです。
          このページでは、活動内容と制作に関する基本情報をまとめています。
        </p>
        <dl className="profile-list">
          <div>
            <dt>活動名</dt>
            <dd>佐藤み。</dd>
          </div>
          <div>
            <dt>制作内容</dt>
            <dd>イラスト、デザイン</dd>
          </div>
          <div>
            <dt>使用ツール</dt>
            <dd>Procreate、Photoshop、Illustrator</dd>
          </div>
          <div>
            <dt>主な公開・販売先</dt>
            <dd>Skeb、X、pixiv、BOOTH、Instagram、Etsy</dd>
          </div>
          <div>
            <dt>机の上にあるもの</dt>
            <dd>可視化タイマー</dd>
          </div>
        </dl>
        <p className="notice-card">
          医療・福祉・介護系の個人依頼はお受けしていません。
        </p>
      </div>
    </section>
  );
}
