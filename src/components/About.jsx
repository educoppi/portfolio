import { CV_URL, SKILLS } from '../data/content.js'
import { useReveal } from '../hooks.js'
import SectionTitle from './SectionTitle.jsx'

const A = ({ children }) => <strong className="accent">{children}</strong>

export default function About() {
  const [textRef, textVisible] = useReveal()
  const [skillsRef, skillsVisible] = useReveal()

  return (
    <section id="sobre" className="section about">
      <div className="about-text">
        <SectionTitle>Sobre mim</SectionTitle>
        <div ref={textRef} className={`reveal reveal-left ${textVisible ? 'is-visible' : ''}`}>
          <p>
            Desenvolvedor de Software formado pelo <A>SENAI</A>, com foco em criar soluções tecnológicas para
            pequenas e grandes empresas. <A>Determinado</A>, <A>proativo</A> e <A>colaborativo</A>, são os
            adjetivos que me tornam um profissional capaz de transformar ideias em soluções eficientes.
          </p>
          <p>
            Sou um desenvolvedor <A>fullstack</A>, utilizando <A>HTML</A>, <A>CSS</A> e <A>JavaScript</A> para a
            interface do usuário, e <A>Java</A> com <A>Spring Boot</A> para o desenvolvimento do servidor, além de{' '}
            <A>SQL</A> para a criação e gerenciamento de bancos de dados. Com esses conhecimentos, sou capaz de
            criar aplicações do zero.
          </p>
          <a className="btn-gradient" href={CV_URL} download="CV_EduardoCoppi.pdf">
            Baixar Currículo
          </a>
        </div>
      </div>

      <ul ref={skillsRef} className={`skills reveal reveal-right ${skillsVisible ? 'is-visible' : ''}`}>
        {SKILLS.map((skill, i) => (
          <li key={skill.name} className="skill" tabIndex={0} style={{ '--i': i }}>
            <div className="skill-icon">
              <img src={skill.icon} alt="" loading="lazy" />
            </div>
            <h3>{skill.name}</h3>
            <p className="skill-tooltip">{skill.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
