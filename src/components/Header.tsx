import { NavLink } from 'react-router-dom';

const navItems = [
  { label: 'トップ', href: '/' },
  { label: 'このサイトについて', href: '/about' },
  { label: 'プロフィール', href: '/profile' },
  { label: 'ギャラリー', href: '/gallery' },
  { label: '公式リンク', href: '/links' },
  { label: 'お問い合わせ', href: '/contact' },
  { label: '利用条件', href: '/usage' },
];

export function Header() {
  return (
    <header className="site-header">
      <NavLink className="site-logo" to="/" aria-label="トップへ戻る">
        佐藤み。公式サイト＆ポートフォリオ
      </NavLink>
      <nav className="site-nav" aria-label="メインナビゲーション">
        {navItems.map((item) => (
          <NavLink key={item.href} to={item.href} end={item.href === '/'}>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
