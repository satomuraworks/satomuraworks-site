import { works } from '../data/works';

export function Works() {
  return (
    <section className="section" id="works">
      <div className="section-heading">
        <p className="eyebrow">Works</p>
        <h2>制作実績</h2>
        <p>イラスト、デザイン、Web制作のサンプルを掲載しています。</p>
      </div>
      <div className="works-grid">
        {works.map((work) => (
          <article className="work-card" key={work.title}>
            <img src={work.image} alt={`${work.title}のサムネイル`} />
            <div className="work-card-body">
              <span>{work.category}</span>
              <h3>{work.title}</h3>
              <p>{work.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
