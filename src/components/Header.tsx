const navItems = [
  { label: 'Works', href: '#works' },
  { label: 'About', href: '#about' },
  { label: 'Links', href: '#links' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  return (
    <header className="site-header">
      <a className="site-logo" href="#top" aria-label="トップへ戻る">
        Creator Name
      </a>
      <nav className="site-nav" aria-label="メインナビゲーション">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
