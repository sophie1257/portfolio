import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <motion.div
        className="section-inner"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow">PROJECTS</p>
        <h2>대표 프로젝트</h2>

        <div className="project-card">
          <div className="project-image">
            <span>LullyDay</span>
          </div>

          <div className="project-info">
            <p className="project-category">
              React · Firebase · Vercel
            </p>

            <h3>LullyDay</h3>

            <p>
              아이와 반려동물이 함께하는 감성 라이프스타일 쇼핑몰입니다.
              React와 Firebase를 활용해 관리자 상품 CRUD, Google 로그인,
              장바구니, 검색, 다크모드 기능을 구현했습니다.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>Firebase</span>
              <span>Firestore</span>
              <span>Context API</span>
              <span>Vercel</span>
            </div>

            <div className="project-links">
              <a
                href="https://lullyday-portfolio-ry4b.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="primary-btn small"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/sophie1257/lullyday_portfolio"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn small"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}