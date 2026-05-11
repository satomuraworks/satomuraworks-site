
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <strong>佐藤み。公式サイト＆ポートフォリオ</strong>
        <p>
          当サイトは、イラスト、キャラクター作品を掲載している佐藤み。の公式サイトです。
        </p>
      </div>
      <nav className="footer-links" aria-label="フッターナビゲーション">
        <Link to="/">サイトトップ</Link>
        <Link to="/links">公式リンク</Link>
        <Link to="/contact">お問い合わせ</Link>
        <Link to="/usage">利用条件</Link>
      </nav>
      <p className="footer-notice">
        二次創作作品の原作・キャラクター等の権利は各権利者に帰属します。掲載画像の無断転載・再配布・加工・生成AI学習への利用、および未管理著作物裁定制度による利用はご遠慮ください。
        使用やご依頼の相談は事前にお問い合わせください。
      </p>
      <small>&copy; 2026 satomuraworks</small>
    </footer>
  );
}
