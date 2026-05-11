import { useCallback, useState } from 'react';
import { ImageModal } from './ImageModal';
import { WorkCard } from './WorkCard';
import type { Work } from '../data/works';

type WorksSectionProps = {
  works: Work[];
  className?: string;
  emptyMessage?: string;
  heading?: {
    label: string;
    title: string;
    description: string;
  };
};

export function WorksSection({ works, className = '', emptyMessage, heading }: WorksSectionProps) {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const closeModal = useCallback(() => setSelectedWork(null), []);

  return (
    <section className={`section ${className}`}>
      {heading && (
        <div className="section-heading">
          {heading.label && <p className="eyebrow">{heading.label}</p>}
          <h2>{heading.title}</h2>
          <p>{heading.description}</p>
        </div>
      )}
      {works.length > 0 ? (
        <div className="works-grid">
          {works.map((work) => (
            <WorkCard work={work} key={work.id} onImageClick={setSelectedWork} />
          ))}
        </div>
      ) : (
        <p className="empty-message">{emptyMessage ?? '表示できる作品がありません。'}</p>
      )}
      {selectedWork && <ImageModal work={selectedWork} onClose={closeModal} />}
    </section>
  );
}
