import Link from 'next/link';
import { FaChevronLeft } from "react-icons/fa6";

export default function BlogDetail() {
  return (
      <main className="card">
        
        <h1 className="text-2xl font-bold mb-4">記事を作成中...</h1>
        <p className="text-gray-600 mb-8">
          この機能はGemini Gemsと連携して実装予定です。
        </p>

        <Link href="/blog" className="text-blue-600 hover:underline flex items-center justify-center gap-2">
          <FaChevronLeft /> ブログ一覧に戻る
        </Link>

      </main>
  );
}

