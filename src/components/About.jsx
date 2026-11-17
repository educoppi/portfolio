import { SKILLS } from '../data/content.js'
import { useReveal } from '../hooks.js'
import { pick, useI18n } from '../i18n.jsx'
import SectionTitle from './SectionTitle.jsx'

const A = ({ children }) => <strong className="accent">{children}</strong>

export default function About() {
  const { t, lang } = useI18n()
  const [textRef, textVisible] = useReveal()
  const [skillsRef, skillsVisible] = useReveal()

  return (
    <section id="sobre" className="section about">
      <div className="about-text">
        <SectionTitle>{t.aboutTitle}</SectionTitle>
        <div ref={textRef} className={`reveal reveal-left ${textVisible ? 'is-visible' : ''}`}>
          <p>{t.about1(A)}</p>
          <p>{t.about2(A)}</p>
        </div>
      </div>

      <ul ref={skillsRef} className={`skills reveal reveal-right ${skillsVisible ? 'is-visible' : ''}`}>
        {SKILLS.map((skill, i) => (
          <li key={skill.name} className="skill" tabIndex={0} style={{ '--i': i }}>
            <div className="skill-icon">
              <img src={skill.icon} alt="" loading="lazy" />
            </div>
            <h3>{skill.name}</h3>
            <p className="skill-tooltip">{pick(skill.description, lang)}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
