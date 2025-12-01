// ブログ記事のダミーデータ
// 将来的にはここをGemini Gemsの出力結果やMicroCMSから取得するようにします

export type BlogPost = {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string; // 記事の抜粋
};

export const blogPosts: BlogPost[] = [
  {
    id: "gemini-gems-intro",
    title: "Gemini Gemsを使ってブログ執筆を自動化してみた",
    date: "2025.12.01",
    category: "AI / Tech",
    excerpt: "GoogleのGemini Gemsを活用して、日々の研究ログや技術メモを効率的にブログ記事化するワークフローを構築しました。プロンプトの設計や...",
  },
  {
    id: "nextjs-portfolio",
    title: "ポートフォリオサイトをNext.jsに移行しました",
    date: "2025.11.20",
    category: "Dev",
    excerpt: "手書きのHTML/CSSで運用していたポートフォリオを、Next.js (App Router) + Tailwind CSSに完全移行。コンポーネント化によるメリットや...",
  },
  {
    id: "research-log-01",
    title: "【研究メモ】ウェアラブルデバイスにおける行動変容ナッジの設計",
    date: "2025.11.15",
    category: "Research",
    excerpt: "HCI研究において重要な「ナッジ」の設計。ユーザーの負担にならず、かつ効果的に行動を変えるためのタイミングとモダリティについて...",
  },
  {
    id: "hackathon-report",
    title: "関西テックハッカソン参加レポート：準優勝しました！",
    date: "2025.10.30",
    category: "Event",
    excerpt: "3日間のハッカソンに参加してきました。開発した「StepMuchle」の技術選定や、チーム開発で意識したこと、プレゼンの反省点などをまとめます。",
  }
];

// サイドバー用の月別アーカイブデータ
export const archives = [
  { month: "2025.12", count: 1 },
  { month: "2025.11", count: 2 },
  { month: "2025.10", count: 1 },
  { month: "2025.09", count: 0 },
];

// カテゴリー一覧データ
export const categories = [
  "All", "Research", "Dev", "AI / Tech", "Event", "Life"
];