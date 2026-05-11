import { creatorLinks } from '../data/links';

export function Links() {
  return (
    <section className="section links-section">
      <div className="link-list">
        {creatorLinks.map((link) => (
          <a
            className="link-card"
            href={link.href}
            key={link.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{link.label}</span>
            <p>{link.description}</p>
            <small>外部リンク</small>
          </a>
        ))}
      </div>
      <p className="official-link-note">
        このサイトに掲載しているリンク以外のページは、本人が管理しているものではない可能性があります。
        ご依頼・ご購入・お問い合わせの際は、こちらの公式リンクからご確認ください。
      </p>
    </section>
  );
}
