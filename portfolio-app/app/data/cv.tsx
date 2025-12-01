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
    year: "2023",
    title: (
      <>
        <strong>Best Presentation Award</strong>, XXX Workshop
      </>
    )
  },
  {
    year: "2022",
    title: (
      <>
        <strong>Finalist</strong>, Kansai Tech Hackathon (Chronos)
      </>
    )
  }
];

// スキルデータ
export const skills = [
  { category: "Languages", items: "Python, JavaScript (React, Node.js), C++, Dart (Flutter)" },
  { category: "Tools", items: "Arduino, Firebase, Figma, Unity" },
  { category: "Hardware", items: "M5Stack, Raspberry Pi, 3D Printing" }
];