import { About } from '../components/About';

export function ProfilePage() {
  return (
    <>
      <section className="page-hero">
        <h1>活動情報</h1>
        <p>佐藤み。の活動内容、制作内容、使用ツール、依頼に関する情報です。</p>
      </section>
      <About />
    </>
  );
}
