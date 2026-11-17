import { PROJECTS } from '../data/content.js'
import { useReveal } from '../hooks.js'
import SectionTitle from './SectionTitle.jsx'

export default function Projects() {
  const [ref, visible] = useReveal(0.1)
  return (
    <section id="projetos" className="section section-stack">
      <SectionTitle>Projetos</SectionTitle>
      <div ref={ref} className={`projects reveal reveal-up ${visible ? 'is-visible' : ''}`}>
        {PROJECTS.map((p, i) => {
          const link = p.demo || p.repo
          const Card = link ? 'a' : 'article'
          const linkProps = link ? { href: link, target: '_blank', rel: 'noreferrer' } : { tabIndex: 0 }
          return (
            <Card key={p.title} className="project" style={{ '--i': i }} {...linkProps}>
              <img className="project-img" src={p.image} alt="" loading="lazy" />
              <div className="project-overlay">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                {p.tags.length > 0 && (
                  <ul className="project-tags">
                    {p.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                )}
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
