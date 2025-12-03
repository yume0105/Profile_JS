import Link from 'next/link';
import { FaChevronLeft, FaFolderOpen, FaClock, FaTag } from "react-icons/fa6";
import { blogPosts, archives, categories } from '../data/blog'; // データを読み込み

export default function BlogPage() {
  return (
    <main className="card card-wide">
        
      {/* ヘッダー：戻るボタン */}
      <div className="nav-header fade-up">
          <Link href="/" className="back-btn">
            <FaChevronLeft /> Home
          </Link>
      </div>
      
      <h1 className="page-title fade-up d-1 text-3xl font-bold mb-8 text-center">Blog & News</h1>
      {/* 2カラムレイアウトエリア */}
      <h1 className="text-2xl font-bold mb-4">記事を作成中...</h1>
      <p className="text-gray-600 mb-8">
        この機能はGemini Gemsと連携して実装予定です。
      </p>

        <footer className="fade-up d-3">
            © 2025 Yume Masuya
        </footer>
    </main>
  );
}
