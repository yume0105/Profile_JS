import Link from 'next/link';
import { FaChevronLeft } from "react-icons/fa6";
import {educationList, researchInterests, publications, awards, skills} from '../data/cv';

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
                <li key={index} className="flex flex-col md:flex-row md:gap-8">
                    <span className="cv-date text-gray-500 font-medium min-w-[140px]">{edu.range}</span>
                    <div>
                    <strong className="block text-lg text-gray-800">{edu.institution}</strong>
                    <span className="text-gray-600">{edu.degree}</span>
                    </div>
                </li>
                ))}
            </ul>
        </section>

        {/* Research Interests Section */}
        <section className="content-section fade-up d-2">
            <h2>Research Interests</h2>
            <p className="text-gray-600 leading-relaxed">
                {researchInterests.join(", ")}
            </p>
        </section>

        {/* Publications Section 
        <section className="content-section fade-up d-2">
            <h2>Publications</h2>
            <ul className="cv-list space-y-4 text-gray-600">
                {publications.map((pub, index) => (
                <li key={index} className="flex flex-col md:flex-row gap-2 md:gap-4">
                    <span className="cv-date font-bold text-blue-600 min-w-[100px]">[{pub.type}]</span>
                    <div>
                    {pub.content}
                    </div>
                </li>
                ))}
            </ul>
        </section>
        */}

        {/* Awards Section */}
        <section className="content-section fade-up d-2">
            <h2>Awards</h2>
            <ul className="cv-list space-y-4">
                {awards.map((award, index) => (
                <li key={index} className="flex flex-col md:flex-row md:gap-8">
                    <span className="cv-date text-gray-500 font-medium min-w-[140px]">{award.year}</span>
                    <div>
                    <span className="text-gray-800">{award.title}</span>
                    </div>
                </li>
                ))}
            </ul>
        </section>

        {/* Skills Section */}
        <section className="content-section fade-up d-2">
            <h2>Skills</h2>
            <div className="text-gray-600 space-y-2">
                {skills.map((skill, index) => (
                <p key={index}>
                    <strong className="text-gray-800 inline-block w-24">{skill.category}:</strong> 
                    {skill.items}
                </p>
                ))}
            </div>
        </section>


        <footer className="fade-up d-3">
            © 2025 Yume Masuya
        </footer>
    </main>
  );
}