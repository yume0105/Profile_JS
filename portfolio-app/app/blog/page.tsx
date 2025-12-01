import Link from 'next/link';
import { FaChevronLeft, FaFolderOpen, FaClock, FaTag } from "react-icons/fa6";
import { blogPosts, archives, categories } from '../data/blog'; // データを読み込み

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* 幅広カードクラスを使用 */}
      <main className="card card-wide bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-6xl">
        
        {/* ヘッダー：戻るボタン */}
        <div className="nav-header fade-up p-6 border-b border-gray-100">
          <Link href="/" className="back-btn flex items-center gap-2 text-gray-500 hover:text-gray-800 transition w-fit">
            <FaChevronLeft /> Home
          </Link>
        </div>

        <div className="p-6 md:p-12">
          <h1 className="page-title fade-up d-1 text-3xl font-bold mb-10 text-center border-b pb-4">
            Blog & News
          </h1>

          {/* 2カラムレイアウトエリア */}
          <div className="flex flex-col lg:flex-row gap-12 fade-up d-2">
            
            {/* --- メインカラム（記事一覧） --- */}
            <div className="w-full lg:w-3/4 space-y-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="group border-b border-gray-100 pb-8 last:border-0">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                    <span className="flex items-center gap-1">
                      <FaClock size={10} />
                      <time>{post.date}</time>
                    </span>
                    <span className="flex items-center gap-1 bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-xs font-medium">
                      <FaTag size={10} />
                      {post.category}
                    </span>
                  </div>
                  
                  <Link href={`/blog/${post.id}`} className="block">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <Link href={`/blog/${post.id}`} className="text-blue-500 font-bold text-sm hover:underline inline-flex items-center gap-1">
                    Read More <FaChevronLeft size={10} />
                  </Link>
                </article>
              ))}
            </div>

            {/* --- サイドバー（月別・カテゴリ） --- */}
            <aside className="w-full lg:w-1/4 space-y-10">
              
              {/* プロフィール簡易表示（任意） */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-gray-800 mb-3">About Me</h3>
                <p className="text-sm text-gray-600 mb-4">
                  HCI研究者 / エンジニア。<br/>
                  日々の研究や開発の記録をAIと共に綴ります。
                </p>
                <Link href="/cv" className="text-xs text-blue-600 hover:underline">
                  詳細プロフィール &rarr;
                </Link>
              </div>

              {/* カテゴリーリスト */}
              <div>
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2 border-b pb-2">
                  <FaFolderOpen /> Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((cat, index) => (
                    <li key={index}>
                      <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm flex items-center justify-between transition">
                        <span>{cat}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 月別アーカイブ */}
              <div>
                <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2 border-b pb-2">
                  <FaClock /> Archives
                </h3>
                <ul className="space-y-2">
                  {archives.map((arch, index) => (
                    <li key={index}>
                      <Link href="#" className="text-gray-600 hover:text-blue-600 text-sm flex items-center justify-between transition">
                        <span>{arch.month}</span>
                        <span className="bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                          {arch.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </aside>

          </div>
        </div>

        <footer className="fade-up d-3 text-center py-6 text-gray-400 text-sm border-t border-gray-100">
            © 2025 Yume Masuya
        </footer>
      </main>
    </div>
  );
}