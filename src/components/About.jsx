import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section about">
      <motion.div
        className="section-inner"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow">ABOUT ME</p>

        <h2>디자인과 구현 사이를 연결하는 웹 작업을 지향합니다.</h2>

        <div className="about-grid">
          <div className="about-card">
            <h3>Design Background</h3>
            <p>
              웹디자인 교육을 통해 HTML, CSS 기반의 웹사이트 제작 경험을
              쌓았고, Photoshop과 Illustrator를 활용한 디자인 작업도
              함께 경험했습니다.
            </p>
          </div>

          <div className="about-card">
            <h3>Frontend Growth</h3>
            <p>
              최근에는 React와 Firebase를 활용해 쇼핑몰형 포트폴리오를
              제작하며 UI 디자인뿐 아니라 데이터 연동, 로그인, 관리자 기능,
              장바구니 등 실제 서비스 흐름에 가까운 기능 구현을 학습했습니다.
            </p>
          </div>

          <div className="about-card">
            <h3>Work Attitude</h3>
            <p>
              이전 업무에서 문서 관리, 데이터 정리, 도면 수정, 담당자와의
              커뮤니케이션을 경험했습니다. 정확한 자료 관리와 협업을
              중요하게 생각합니다.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}