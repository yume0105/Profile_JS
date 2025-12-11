import Link from 'next/link';
import { FaChevronLeft } from "react-icons/fa6";
import { educationList, researchInterests, publications, awards, skills } from '../data/cv';

// --- コンポーネント ---

export default function CvPage() {
  return (
    <main className="card card-wide">
      {/* ヘッダー：戻るボタン */}
      <div className="nav-header fade-up">
        <Link href="/" className="back-btn">
          <FaChevronLeft /> Home
        </Link>
      </div>

      <h1 className="page-title fade-up d-1 text-3xl font-bold mb-8 text-center">Curriculum Vitae</h1>

      {/* Education Section */}
      <section className="content-section fade-up d-2">
        <h2>Education</h2>
        <ul className="cv-list space-y-6">
          {educationList.map((edu, index) => (
            <li key={index} className="flex flex-col md:flex-row md:gap-8 items-baseline">
              {/* 日付: 幅を固定して揃える */}
              <span className="cv-date text-gray-500 font-medium min-w-[140px] shrink-0">
                {edu.range}
              </span>
              {/* 内容: 縦並びにする */}
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

      {/* Research Interests Section */}
      <section className="content-section fade-up d-2">
        <h2>Research Interests</h2>
        {/* カンマ区切りではなく、タグのように表示して見やすく変更（お好みで元のjoinに戻せます） */}
        <div className="flex flex-wrap gap-2">
          {researchInterests.map((item, index) => (
             <span key={index} className="px-3 py-1 bg-white/60 border border-white rounded-full text-sm text-gray-700 shadow-sm">
               {item}
             </span>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section className="content-section fade-up d-2">
        <h2>Awards</h2>
        <ul className="cv-list space-y-6">
          {awards.map((award, index) => (
            <li key={index} className="flex flex-col md:flex-row md:gap-8 items-start">
              {/* 年: 幅固定 */}
              <span className="cv-date text-accent font-bold min-w-[140px] shrink-0">
                {award.year}
              </span>
              
              {/* ★ここを修正: タイトルと内容を縦積みにするコンテナを追加 ★ */}
              <div className="flex flex-col">
                {/* タイトル */}
                <span className="text-gray-800 text-base leading-snug mb-1">
                  {award.title}
                </span>
                {/* ★追加: これまで表示されていなかった詳細(content)を表示 ★ */}
                <span className="text-gray-600 text-sm leading-relaxed">
                  {award.content}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Skills Section */}
      <section className="content-section fade-up d-2">
        <h2>Skills</h2>
        <div className="text-gray-600 space-y-3">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:gap-4">
              <strong className="text-gray-800 w-24 shrink-0">
                {skill.category}:
              </strong> 
              <span>{skill.items}</span>
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