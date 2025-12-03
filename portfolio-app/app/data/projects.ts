// プロジェクトのデータを管理する専用のファイルです。
// 一覧ページと詳細ページの両方から、このデータを読み込んで使います。

export const projects = [
  {
    id: "chronos",
    title: "Chronos",
    description: "スマートグラスを用いたライフログ×自動想起で忘却をなくす、記憶を補助・拡張し、提示するサイバネティックアバター",
    image: "https://placehold.co/600x400/ff6b81/fff?text=Chronos",
    link: "/projects/chronos", // ★これを追加しました！
    tags: [
      { text: "Research", type: "research" },
      { text: "Project", type: "dev" },
      { text: "In Progress", type: "status-in-progress" }
    ],
    content: `
      <p>記事の準備中です。</p>
      <p>随時更新していきます。</p>
    `
  },
  {
    id: "myopia",
    title: "近業抑制システム",
    description: "小児の近業作業を抑制するためのナッジを提供するシステムの開発",
    image: "https://placehold.co/600x400/706fd3/fff?text=Myopia+Prevention",
    link: "/projects/myopia", // ★追加
    tags: [
      { text: "Research", type: "research" },
      { text: "In Progress", type: "status-in-progress" }
    ],
    content: `
      <p>近視の進行を防ぐために、画面との距離が近づきすぎた際に通知を行うシステムです。</p>
    `
  },
  {
    id: "medicine",
    title: "服薬支援システム",
    description: "スマートグラスを用いた記憶障がい者向け服薬管理・支援システムの開発",
    image: "https://placehold.co/600x400/8080ff/fff?text=Medicine+Support",
    link: "/projects/medicine", // ★追加
    tags: [
      { text: "Research", type: "research" },
      { text: "In Progress", type: "status-in-progress" }
    ],
    content: `
      <p>服薬の時間を通知し、薬の飲み間違いを防ぐための画像認識機能を搭載しています。</p>
    `
  },
  {
    id: "kintore",
    title: "StepMuchle",
    description: "ハッカソンで開発。スクワットを習慣化させるためのエンタメアプリ",
    image: "https://placehold.co/600x400/ff9a9e/fff?text=Fitness+App",
    link: "/projects/kintore", // ★追加
    tags: [
      { text: "Game", type: "dev" },
      { text: "Hackathon", type: "dev" },
      { text: "In Progress", type: "status-in-progress" }
    ],
    content: `
      <p>楽しみながら運動不足を解消するためのアプリです。スマホのカメラでスクワットの回数をカウントします。</p>
    `
  },
  {
    id: "oturi",
    title: "動物たちとおつりで遊ぼう",
    description: "脳トレゲームコンペティション準グランプリ。知育・認知症予防を対象とした簡単なPCゲーム",
    image: "https://placehold.co/600x400/a18cd1/fff?text=Brain+Training",
    link: "/projects/oturi", // ★追加
    tags: [
      { text: "Game", type: "dev" },
      { text: "Competition", type: "dev" },
      { text: "Finished", type: "status-finished" }
    ],
    content: `
      <p>お買い物のシミュレーションを通じて、計算能力を維持・向上させるゲームです。</p>
    `
  },
  {
    id: "travel",
    title: "Travel App",
    description: "旅のプラン共有・AI提案サービス",
    image: "https://placehold.co/600x400/fad0c4/fff?text=Travel+App",
    link: "/projects/travel", // ★追加
    tags: [
      { text: "Service", type: "dev" },
      { text: "Contest", type: "dev" },
      { text: "In Progress", type: "status-in-progress" }
    ],
    content: `
      <p>AIが行き先を提案してくれる旅行計画アプリです。</p>
    `
  },
];