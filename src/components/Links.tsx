import { creatorLinks } from '../data/links';

export function Links() {
  return (
    <section className="section links-section" id="links">
      <div className="section-heading">
        <p className="eyebrow">Links</p>
        <h2>リンク</h2>
      </div>
      <div className="link-list">
        {creatorLinks.map((link) => (
          <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
