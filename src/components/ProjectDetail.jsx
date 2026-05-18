import { motion } from 'framer-motion'

export default function ProjectDetail() {
  const features = [
    'Firebase Google 로그인',
    '관리자 이메일 기반 접근 제한',
    'Firestore 상품 등록 / 조회 / 수정 / 삭제',
    '상품 상세 페이지',
    '장바구니 담기',
    '수량 증가 / 감소',
    '상품 삭제',
    '총 금액 계산',
    'localStorage 장바구니 유지',
    '검색 기능',
    '다크모드',
    '반응형 UI',
  ]

  const troubles = [
    'Vercel 배포 시 pages / Pages 대소문자 경로 문제 해결',
    'Firebase auth/configuration-not-found 오류 해결',
    'Firebase auth/unauthorized-domain 오류 해결',
    'CartContext 함수 누락 오류 해결',
    'Firestore Security Rules 권한 문제 해결',
  ]

  return (
    <section className="section project-detail">
      <motion.div
        className="section-inner"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow">PROJECT DETAIL</p>
        <h2>LullyDay 프로젝트 상세</h2>

        <div className="detail-grid">
          <div className="detail-box">
            <h3>프로젝트 개요</h3>
            <p>
              LullyDay는 아기용품과 반려동물용품을 함께 다루는 감성
              라이프스타일 쇼핑몰입니다. 단순한 정적 웹사이트가 아니라
              Firebase와 연동해 관리자가 상품을 직접 등록, 수정, 삭제할 수
              있도록 구현했습니다.
            </p>
          </div>

          <div className="detail-box">
            <h3>내가 구현한 부분</h3>
            <p>
              React Router를 활용해 Home, Product Detail, Cart, Login,
              Admin 페이지를 구성했습니다. Context API를 사용해 로그인 상태,
              장바구니 상태, 다크모드 상태를 전역으로 관리했습니다.
              Firebase Authentication과 Firestore를 연동해 관리자 상품 CRUD
              기능을 구현했습니다.
            </p>
          </div>
        </div>

        <div className="list-grid">
          <div className="list-box">
            <h3>주요 기능</h3>
            <ul>
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="list-box">
            <h3>트러블슈팅</h3>
            <ul>
              {troubles.map((trouble) => (
                <li key={trouble}>{trouble}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}