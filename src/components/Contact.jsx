import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <motion.div
        className="section-inner contact-inner"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow">CONTACT</p>

        <h2>
          함께 성장할 수 있는
          <br />
          웹디자인 · 프론트엔드 직무를 희망합니다.
        </h2>

        <p>
          사용자에게 편안한 경험을 주는 화면을 만들고,
          기능적으로도 안정적인 웹 서비스를 구현하는 사람이 되고 싶습니다.
        </p>

        <div className="contact-links">
          <a href="mailto:py.hash2023@gmail.com">
            py.hash2023@gmail.com
          </a>

          <a
            href="https://github.com/sophie1257"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://lullyday-portfolio.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            LullyDay
          </a>
        </div>

        <div className="copyright-notice">
          <p>
            © 2026 Portfolio. Designed and developed by Seongjeon Baek.
          </p>
          <p>
            본 포트폴리오의 디자인, 코드, 기획 및 콘텐츠는 채용 검토
            목적으로만 제공되며, 사전 동의 없는 복제·수정·배포·상업적
            사용을 금합니다.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
