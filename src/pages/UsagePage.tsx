import { UsagePolicy } from '../components/UsagePolicy';

export function UsagePage() {
  return (
    <>
      <section className="page-hero">
        <h1>掲載作品の利用について</h1>
        <p>当サイトに掲載している画像・文章・制作物の利用条件です。</p>
      </section>
      <UsagePolicy />
    </>
  );
}
