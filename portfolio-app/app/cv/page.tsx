/* app/cv/page.tsx (または該当のパス) */

import Link from 'next/link';
import { FaChevronLeft, FaArrowUpRightFromSquare } from "react-icons/fa6"; // ★アイコン追加
import { educationList, researchInterests, publications, awards, skills } from '../data/cv';

export default function CvPage() {
  return (
    <main className="card card-wide">
      <div className="nav-header fade-up">
        <Link href="/" className="back-btn">
          <FaChevronLeft /> Home
        </Link>
      </div>

      <h1 className="page-title fade-up d-1 text-3xl font-bold mb-8 text-center">Curriculum Vitae</h1>

      {/* Education Section (変更なし) */}
      <section className="content-section fade-up d-2">
        <h2>Education</h2>
        <ul className="cv-list space-y-6">
          {educationList.map((edu, index) => (
            <li key={index} className="flex flex-col md:flex-row md:gap-8 items-baseline">
              <span className="cv-date text-gray-500 font-medium min-w-[140px] shrink-0">
                {edu.range}
              </span>
              <div className="flex flex-col">
                <strong className="text-lg text-gray-800 leading-snug">
                  {edu.institution}
                </strong>
                <span className="text-gray-600 text-sm mt-1">
                  {edu.degree}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Research Interests (変更なし) */}
      <section className="content-section fade-up d-2">
        <h2>Research Interests</h2>
        <div className="flex flex-wrap gap-2">
          {researchInterests.map((item, index) => (
             <span key={index} className="px-3 py-1 bg-white/60 border border-white rounded-full text-sm text-gray-700 shadow-sm">
               {item}
             </span>
          ))}
        </div>
      </section>

      {/* Awards Section (★修正：リンク機能追加) */}
      <section className="content-section fade-up d-2">
        <h2>Awards</h2>
        <ul className="cv-list space-y-6">
          {awards.map((award, index) => (
            <li key={index} className="flex flex-col md:flex-row md:gap-8 items-start">
              <span className="cv-date text-accent font-bold min-w-[140px] shrink-0">
                {award.year}
              </span>
              
              <div className="flex flex-col">
                {/* リンクがある場合はLinkコンポーネントで囲む、なければそのまま表示 */}
                {/* @ts-ignore: data側にlinkがない場合のエラー回避用（型定義していれば不要） */}
                {award.link ? (
                  <Link href={award.link} className="group flex items-center gap-2 text-gray-800 hover:text-accent transition-colors">
                    <span className="text-base leading-snug font-semibold border-b border-transparent group-hover:border-accent">
                        {award.title}
                    </span>
                    {/* 外部リンクっぽいアイコンをつけるとおしゃれ */}
                    <FaArrowUpRightFromSquare />
                  </Link>
                ) : (
                  <span className="text-gray-800 text-base leading-snug font-semibold">
                    {award.title}
                  </span>
                )}

                <span className="text-gray-600 text-sm leading-relaxed mt-1">
                  {award.content}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Skills Section (★修正：タグスタイルに変更) */}
      <section className="content-section fade-up d-2">
        <h2>Skills</h2>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col gap-2">
              {/* カテゴリ名 */}
              <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                {skill.category}
              </span>
              
              {/* アイテムをカンマで分割してタグ表示 */}
              <div className="flex flex-wrap gap-2">
                {skill.items.split(',').map((itemStr, i) => (
                  <span key={i} className="px-3 py-1 bg-white/60 border border-white rounded-md text-sm text-gray-700 shadow-sm">
                    {itemStr.trim()}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="fade-up d-3 mt-8 text-center text-gray-400 text-sm">
        © 2025 Yume Masuya
      </footer>
    </main>
  );
}