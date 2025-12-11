import Image from "next/image";
import Link from 'next/link';
import avatarPic from '../public/avatar.jpg';
import { FaGithub, FaLinkedinIn, FaDiscord, FaFacebookF, FaFileLines, FaLaptopCode, FaPenNib } from "react-icons/fa6";

export default function Home() {
  return (
    //メインの白いカード
    <main className="card">
      {/* 顔写真 */} 
      <section className="avatar-container fade-up">
        <div className="orbit"></div>
        {/*<img src="avatar.jpg" alt="Profile" className="avatar" />*/}
        <Image 
          src={avatarPic} 
          alt="Profile" 
          className="avatar"
          placeholder="blur" // おまけ：読み込み中にボヤッとした画像を表示する機能も使える
        />
      </section>
      {/* 名前と肩書き */}
      <section className="fade-up d-1">
        <h1 className="name-title">Yume Masuya</h1>
        <div className="kana-name">マスヤ　ユメ</div>
        <div className="role">Researcher / Engineer / Developer</div>
      </section>
      {/* 自己紹介文 */}
      <section className="fade-up d-2">
        <p className="bio">
          奈良先端科学技術大学院大学(CARELab)所属
        </p>
      </section>
      {/*メールアドレス*/}
      <section className="fade-up d-2">
        <p className="email">
          University Email : <a href="mailto:masuya.yume.mx5@naist.ac.jp" className="email-link">masuya.yume.mx5@naist.ac.jp</a><br />
          Personal Email : <a href="mailto:yume.masuya@gmail.com" className="email-link">yume.masuya@gmail.com</a>
        </p>
      </section>
      {/* SNSリンクとページリンクのグリッド */}
      <div className="bottom-grid fade-up d-3">
        {/* SNSリンク */}
        <section className="sns-area">
          <a href="https://github.com/yume0105" className="sns-btn" target="_blank">
              <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/yume-masuya" className="sns-btn" target="_blank">
              <FaLinkedinIn size={24} />
          </a>
          <a href="https://discord.com/users/_yume_0105" className="sns-btn" target="_blank">
              <FaDiscord size={24} />
          </a>
          <a href="https://facebook.com/yumemasuya" className="sns-btn" target="_blank">
              <FaFacebookF size={24} />
          </a>

        </section>
        {/*ページリンク */}
        <nav className="link-area">
          <Link href="/cv" className="link-btn highlight" >
              <span>Curriculum Vitae</span>
              <FaFileLines />
          </Link>
          <Link href="/projects" className="link-btn highlight" >
              <span>Projects</span>
              <FaLaptopCode />
          </Link>
          <Link href="/blog" className="link-btn highlight" >
              <span>Blog</span>
              <FaPenNib />
          </Link>
        </nav>
      </div>
      <footer className="fade-up d-3" style={{fontSize: '0.8rem', color: '#888'}}>
            © 2025 Yume Masuya
      </footer>
    </main>
  );
}
