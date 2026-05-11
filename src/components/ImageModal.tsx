import { useEffect } from 'react';
import type { Work } from '../data/works';
import { categoryLabels } from '../data/works';

type ImageModalProps = {
  work: Work;
  onClose: () => void;
};

export function ImageModal({ work, onClose }: ImageModalProps) {
  const visibleTags = work.tags.filter((tag) => tag !== categoryLabels[work.category]).slice(0, 3);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="image-modal-overlay" onClick={onClose} role="presentation">
      <div
        className="image-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="image-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="image-modal-close" type="button" onClick={onClose} aria-label="閉じる">
          ×
        </button>
        <div className="image-modal-media">
          <img src={work.image} alt={work.title} />
        </div>
        <div className="image-modal-body">
          <div className="work-labels modal-labels">
            <span>{categoryLabels[work.category]}</span>
            {visibleTags.map((tag) => (
              <span className="tag-label" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <h2 id="image-modal-title">{work.title}</h2>
          <p>{work.description}</p>
          {work.isFanart && (
            <p className="fanart-rights-note">
              この作品に含まれる原作・キャラクター・設定・デザイン等の権利は、各原著作者・権利者に帰属します。
              掲載画像のうち、構図・作画・彩色等の創作部分は佐藤み。に帰属します。
            </p>
          )}
          <dl className="work-meta modal-meta">
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
            {work.createdLabel && (
              <div>
                <dt>制作時期</dt>
                <dd>{work.createdLabel}</dd>
              </div>
            )}
          </dl>
          <p className="modal-usage-note">
            この画像の無断転載・加工・再配布・生成AI学習への利用、および未管理著作物裁定制度による利用はご遠慮ください。
            使用をご希望の場合は、事前にお問い合わせください。
          </p>
        </div>
      </div>
    </div>
  );
}
