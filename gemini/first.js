/**
 * 【ここから教科書スタート！】
 * * これは Next.js (React) の基本的なページファイルの例です。
 * ファイル名: app/page.js (トップページとして振る舞います)
 * * ※注意: このプレビュー画面ではNext.jsの機能が直接動かないため、
 * 一部標準のHTMLタグ(aタグなど)で代用していますが、
 * 実際のNext.js開発での書き方をコメントで解説しています。
 */

// 1. import（インポート）
// 本来のNext.jsでは以下の行を使います。
// import Link from 'next/link';

// 2. export default function（エクスポート デフォルト ファンクション）
// 意味: 「このファイルが呼ばれたら、この関数（部品）をメインとして差し出します」
//
// - export default: 「これがこのファイルの主役です！」という宣言。
// - function Home(): 「Home」という名前の「関数（レシピ）」を作ります。
//   関数名は必ず「大文字」から始めます（PascalCaseといいます）。
export default function Home() {

  // 3. return（リターン）
  // 意味: 「この関数の結果として、これを画面に表示してください」
  // この ( ) の中身が、実際にブラウザに表示される内容です。
  // 見た目はHTMLに似ていますが、「JSX (ジェーエスエックス)」と呼ばれます。
  return (
    // 4. 親要素（おやようそ）
    // Reactのルール: returnの中身は、必ず「一つの大きなタグ」で囲まないといけません。
    // ここでは <main> が一番外側の箱（親）です。
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* 5. className（クラスネーム）
         HTMLでは単に "class" と書きますが、React(JSX)では "className" と書きます。
         これは JavaScript の中で "class" という言葉が別の意味（分類）で使われるため、区別するためです。
         
         中身の "max-w-4xl mx-auto..." は Tailwind CSS の書き方です。
         CSSファイルを行ったり来たりせず、ここに直接デザインの指示を書きます。
      */}

      {/* --- ヘッダーセクション --- */}
      <section className="py-20 px-6 text-center">
        {/* 6. インデント（字下げ）の意味
           コードの左側にスペースが空いているのは「入れ子構造」を表すためです。
           <section> の中に <h1> が入っている、という関係性がひと目で分かります。
           これがズレていると、「どこからどこまでが一つの箱なのか」が分からなくなります。
        */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          こんにちは、<span className="text-blue-600">Gemini</span>です。
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Next.jsとVercelで、ポートフォリオをアップグレード中。
        </p>
        
        {/* Linkコンポーネントの使い方
           本来のNext.js: <Link href="/blog" className="...">ブログを見る</Link>
           ここではプレビュー用に <a> タグを使っています。
        */}
        <a 
          href="/blog" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          ブログを見る
        </a>
      </section>

      {/* --- プロジェクト紹介セクション --- */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6 border-b-2 border-gray-200 pb-2">
          Projects
        </h2>

        {/* 7. グリッドレイアウト
           "grid grid-cols-1 md:grid-cols-2"
           スマホ(cols-1)では1列、PCなど中画面以上(md:cols-2)では2列にする、という指示。
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* プロジェクトカード 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
            <div className="h-40 bg-blue-100 rounded-lg mb-4 flex items-center justify-center text-blue-500 text-4xl">
              {/* アイコンの代わり */}
              💻
            </div>
            <h3 className="text-xl font-bold mb-2">My Portfolio</h3>
            <p className="text-gray-600 text-sm mb-4">
              現在作成中のポートフォリオサイト。Next.jsを使って爆速化を目指しています。
            </p>
            {/* 詳細ページへのリンク
                本来のNext.js: <Link href="/projects/portfolio" ...>詳細を見る →</Link>
            */}
            <a href="/projects/portfolio" className="text-blue-600 font-semibold text-sm hover:underline">
              詳細を見る →
            </a>
          </div>

          {/* プロジェクトカード 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100">
             <div className="h-40 bg-purple-100 rounded-lg mb-4 flex items-center justify-center text-purple-500 text-4xl">
              💎
            </div>
            <h3 className="text-xl font-bold mb-2">Gemini Gems Blog</h3>
            <p className="text-gray-600 text-sm mb-4">
              AIとの対話を記録するブログ機能。MicroCMSと連携予定。
            </p>
            <a href="/projects/gemini-blog" className="text-blue-600 font-semibold text-sm hover:underline">
              詳細を見る →
            </a>
          </div>

        </div>
      </section>

      {/* --- フッター --- */}
      <footer className="py-8 text-center text-gray-400 text-sm mt-10 border-t">
        &copy; 2024 My Portfolio. Built with Next.js & Vercel.
      </footer>
    </main>
  );
}
