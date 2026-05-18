import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <motion.div
        className="section-inner"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow">EXPERIENCE</p>
        <h2>업무 경험을 웹 프로젝트 역량으로 연결하고 있습니다.</h2>

        <div className="experience-card">
          <h3>문서 관리 · 데이터 정리 · 커뮤니케이션 경험</h3>

          <p>
            이전 업무에서 공공사업 관련 문서 관리, 엑셀 데이터 정리,
            통신 설비 도면 수정, 담당자와의 커뮤니케이션을 경험했습니다.
            이 과정에서 정확한 자료 관리와 협업의 중요성을 배웠습니다.
          </p>

          <p>
            이러한 경험을 바탕으로 웹 프로젝트에서도 구조적인 파일 관리,
            사용자 흐름을 고려한 화면 구성, 오류 발생 시 원인을 파악하고
            해결하는 과정을 중요하게 생각하고 있습니다.
          </p>
        </div>

        <div className="experience-card">
          <h3>웹디자인 교육 경험</h3>

          <p>
            홍익대학교 산학협력단 빅데이터 양성과정에서 웹디자인 교육을
            함께 수강하며 HTML, CSS 기반 웹사이트 제작과 디자인 툴 활용
            경험을 쌓았습니다.
          </p>
        </div>
      </motion.div>
    </section>
  )
}