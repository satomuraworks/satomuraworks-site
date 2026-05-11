import { Link } from 'react-router-dom';

const siteSections = [
  {
    title: 'このサイトについて',
    text: 'サイトの掲載内容と各ページへの案内をまとめています。',
    href: '/about',
  },
  {
    title: 'プロフィール',
    text: '活動内容、制作内容、使用ツール、依頼に関する情報を掲載しています。',
    href: '/profile',
  },
  {
    title: 'ギャラリー',
    text: 'オリジナル作品と二次創作作品をカテゴリ別に掲載しています。',
    href: '/gallery',
  },
  {
    title: '公式リンク',
    text: '佐藤み。本人が案内している公式ページへのリンクを掲載しています。',
    href: '/links',
  },
  {
    title: 'お問い合わせ',
    text: '制作のご相談、権利関係、掲載内容に関する連絡先を掲載しています。',
    href: '/contact',
  },
  {
    title: '利用条件',
    text: '当サイトに掲載している画像・文章・制作物の利用条件を掲載しています。',
    href: '/usage',
  },
];

export function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <h1>このサイトについて</h1>
        <p>佐藤み。公式サイト＆ポートフォリオの掲載内容をまとめています。</p>
      </section>
      <section className="section site-overview-section">
        <div className="overview-grid">
          {siteSections.map((section) => (
            <Link className="overview-card" to={section.href} key={section.title}>
              <span>{section.title}</span>
              <p>{section.text}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
