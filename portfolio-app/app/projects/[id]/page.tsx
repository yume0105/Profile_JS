import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaChevronLeft } from "react-icons/fa6";
import { projects } from '../../data/projects'; // データを読み込み

// ★修正点1: paramsの型定義を Promise<{ id: string }> に変更
// ★修正点2: 関数に async を追加
export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  
  // ★修正点3: await を使って params の中身を取り出す
  const { id } = await params;

  // 1. URLのIDと一致するプロジェクトをデータから探す
  const project = projects.find((p) => p.id === id);

  // 2. もし見つからなかったら「404ページ」に飛ばす
  if (!project) {
    notFound();
  }

  // 3. 見つかったら画面を表示する
  return (
    <main className="card card-wide">
    
    {/* ヘッダー：戻るボタン */}
    <div className="nav-header fade-up">
        <Link href="/projects" className="back-btn">
            <FaChevronLeft /> Back to Projects
        </Link>
    </div>

    {/* コンテンツ部分 */}
    <div className="p-8 md:p-12">
        
        {/* タイトルとタグ */}
        <div className="fade-up d-1 mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
            <span key={index} className={`tag ${tag.type} text-xs px-2 py-1 rounded-md font-medium`}>
                {tag.text}
            </span>
            ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {project.title}
        </h1>
        </div>

        {/* メイン画像 */}
        <div className="fade-up d-2 mb-10 rounded-xl overflow-hidden shadow-sm border border-gray-100">
        {/* imgタグを使用（Imageコンポーネントにする場合はwidth/heightが必要） */}
        <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto object-cover max-h-[500px]"
        />
        </div>

        {/* 本文エリア */}
        <div className="fade-up d-3">
        <h2 className="text-xl font-bold mb-4 border-l-4 border-blue-500 pl-4">
            プロジェクト概要
        </h2>
        <div className="text-gray-600 leading-relaxed space-y-4">
            {/* descriptionを表示 */}
            <p className="text-lg font-medium text-gray-800 mb-6">
            {project.description}
            </p>
            
            {/* 詳細な本文 (content) を表示 */}
            <div dangerouslySetInnerHTML={{ __html: project.content }} />
        </div>
        </div>

    </div>

    <footer className="fade-up d-3">
        © 2025 Yume Masuya
    </footer>
    </main>
  );
}