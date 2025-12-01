import Link from 'next/link';
import { FaChevronLeft } from "react-icons/fa6";
import { projects } from '../data/projects';

export default function ProjectsPage() {
  return (
    <main className="card card-wide">
    {/* ヘッダー部分 */}
    <div className="nav-header fade-up">
        <Link href="/" className="back-btn">
        <FaChevronLeft /> Home
        </Link>
    </div>

    
    <h1 className="page-title fade-up d-1 text-3xl font-bold mb-8 text-center">Works & Projects</h1>

    {/* プロジェクトグリッド */}
    <div className="projects-grid">
        {projects.map((project) => (
            <Link key={project.id} href={project.link} className="project-item">
            
            {/* サムネイル画像 */}
            <div className="relative h-48 overflow-hidden">
                <img 
                src={project.image} 
                alt={project.title} 
                className="project-thumb" 
                />
            </div>

            {/* 情報エリア */}
            <div className="project-info">
                <div className="project-tags">
                {project.tags.map((tag, index) => (
                    <span key={index} className={`tag ${tag.type}`}>
                    {tag.text}
                    </span>
                ))}
                </div>
                <h3 className="project-title">
                {project.title}
                </h3>
                <p className="project-desc">
                {project.description}
                </p>
            </div>
            </Link>
        ))}
    </div>

    <footer className="fade-up d-3">
        © 2025 Yume Masuya
    </footer>
    </main>
  );
}