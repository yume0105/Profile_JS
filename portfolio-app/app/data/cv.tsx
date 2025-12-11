import { link } from 'fs';
import React from 'react';

// 学歴データ
export const educationList = [
  {
    range: "2025 - 現在",
    institution: "奈良先端科学技術大学院大学(NAIST)",
    degree: "博士前期課程"
  },
  {
    range: "2021 - 2025",
    institution: "鹿児島大学",
    degree: "学士（工学）"
  }
];

// 研究興味データ
export const researchInterests = [
  "Human-Computer Interaction (HCI)",
  "Wearable Devices",
  "Lifelogging",
  "Behavior Change Support Systems",
  "Health Informatics"
];

// 論文・発表データ
// ※JSXを含むため、ファイル拡張子は .tsx である必要があります
export const publications = [
  {
    type: "Domestic",
    content: (
      <>
        <strong>Yume Masuya</strong>, et al. &quot;Title of the paper relating to myopia prevention.&quot; In Proc of IPSJ XXX, 2024.
      </>
    )
  },
  {
    type: "Poster",
    content: (
      <>
        <strong>Yume Masuya</strong>, et al. &quot;Study on Medication Support System.&quot; HCG Symposium, 2023.
      </>
    )
  }
];

// 受賞歴データ
export const awards = [
  {
    year: "2025",
    link: "/projects/chronos",
    title: (
      <>
        <strong>関西テック・クリエイター・チャレンジ　AI・IoT部門　採択</strong>
      </>
    ),
    content: (
      <>
        Chronos 記憶を補助・拡張し、提示するサイバネティック・アバター
      </>
    )
  },
  {
    year: "2022",
    link: "/projects/oturi",
    title: (
      <>
        <strong>第4回全国電子工学系学校ゲーム制作コンペティション　準グランプリ</strong>
      </>
    ),
    content: (
      <>
      チームでの脳トレゲーム制作
      </>
    )
  }
];

// スキルデータ
export const skills = [
  { category: "Languages", items: "Japanese (Native), English (Beginner Level)" },
  { category: "Programming Languages", items: "Python, JavaScript (React Node.js), C++, C#, C, HTML, CSS" },
  { category: "Tools", items: "Arduino, Figma, Unity, Miro, AWS" }
];