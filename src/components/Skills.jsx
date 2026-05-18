import { motion } from 'framer-motion'

export default function Skills() {
  const skillGroups = [
    {
      title: 'Design',
      skills: [
        'Photoshop',
        'Illustrator',
        'Brand Mood',
        'Banner Design',
        'Responsive Layout',
      ],
    },
    {
      title: 'Frontend',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'React Router',
        'Context API',
        'Vite',
      ],
    },
    {
      title: 'Backend / Database',
      skills: [
        'Firebase Authentication',
        'Firebase Firestore',
        'Firestore Security Rules',
      ],
    },
    {
      title: 'Tools',
      skills: [
        'Git',
        'GitHub',
        'Vercel',
        'VSCode',
      ],
    },
  ]

  return (
    <section id="skills" className="section skills">
      <motion.div
        className="section-inner"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow">SKILLS</p>
        <h2>사용 경험이 있는 기술과 도구입니다.</h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="tag-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}