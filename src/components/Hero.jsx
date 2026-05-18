import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="eyebrow">WEB DESIGN · FRONTEND</p>

        <h1>
          사용자의 일상에 자연스럽게 스며드는
          <br />
          따뜻한 웹 경험을 디자인하고 구현합니다.
        </h1>

        <p className="hero-desc">
          디자인 감각과 프론트엔드 구현력을 함께 키워가고 있는
          웹디자인 · 프론트엔드 포트폴리오입니다.
          React와 Firebase를 활용해 실제 서비스 흐름에 가까운
          쇼핑몰형 프로젝트를 제작했습니다.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            프로젝트 보기
          </a>
          <a href="#contact" className="secondary-btn">
            연락하기
          </a>
        </div>
      </motion.div>
    </section>
  )
}