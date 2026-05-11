import { Link, NavLink, useParams } from 'react-router-dom';
import { WorksSection } from '../components/WorksSection';
import { galleryCategories, works, type WorkCategory } from '../data/works';

const validCategories = galleryCategories
  .filter((category): category is { key: WorkCategory; label: string } => category.key !== 'all')
  .map((category) => category.key);

export function GalleryPage() {
  const { category } = useParams();
  const isValidCategory = !category || validCategories.includes(category as WorkCategory);
  const selectedCategory = isValidCategory ? (category as WorkCategory | undefined) : undefined;
  const shownWorks = selectedCategory
    ? works.filter((work) => work.category === selectedCategory)
    : works;

  return (
    <>
      <section className="page-hero">
        <h1>作品一覧</h1>
        <p>掲載している作品をカテゴリ別に確認できます。</p>
      </section>
      <section className="gallery-filter-section">
        <nav className="category-nav" aria-label="ギャラリーカテゴリ">
          {galleryCategories.map((item) => (
            <NavLink
              key={item.key}
              to={item.key === 'all' ? '/gallery' : `/gallery/${item.key}`}
              end={item.key === 'all'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        {!isValidCategory && (
          <div className="empty-message category-error">
            <p>該当するカテゴリがありません。</p>
            <Link className="text-link" to="/gallery">
              ギャラリー一覧に戻る
            </Link>
          </div>
        )}
      </section>
      {isValidCategory && (
        <WorksSection
          works={shownWorks}
          className="gallery-list-section"
          emptyMessage="このカテゴリに該当する作品はありません。"
        />
      )}
    </>
  );
}
