import type { Work } from '../data/works';
import { categoryLabels } from '../data/works';

type WorkCardProps = {
  work: Work;
  onImageClick?: (work: Work) => void;
};

export function WorkCard({ work, onImageClick }: WorkCardProps) {
  const visibleTags = work.tags.filter((tag) => tag !== categoryLabels[work.category]).slice(0, 3);

  return (
    <article className="work-card">
      <button
        className="work-image-frame"
        type="button"
        onClick={() => onImageClick?.(work)}
        aria-label={`${work.title}を拡大表示`}
      >
        <img src={work.image} alt={work.title} />
      </button>
      <div className="work-card-body">
        <div className="work-labels">
          <span>{categoryLabels[work.category]}</span>
          {visibleTags.map((tag) => (
            <span className="tag-label" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <h3>{work.title}</h3>
        <p>{work.description}</p>
        <dl className="work-meta">
          <div>
            <dt>ツール</dt>
            <dd>{work.tools}</dd>
          </div>
          {work.productionTime && (
            <div>
              <dt>制作時間</dt>
              <dd>{work.productionTime}</dd>
            </div>
          )}
        </dl>
      </div>
    </article>
  );
}
