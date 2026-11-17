import { PROJECTS } from '../data/content.js'
import { useReveal } from '../hooks.js'
import { pick, useI18n } from '../i18n.jsx'
import SectionTitle from './SectionTitle.jsx'

export default function Projects() {
  const { t, lang } = useI18n()
  const [ref, visible] = useReveal(0.1)
  return (
    <section id="projetos" className="section section-stack">
      <SectionTitle>{t.projectsTitle}</SectionTitle>
      <div ref={ref} className={`projects reveal reveal-up ${visible ? 'is-visible' : ''}`}>
        {PROJECTS.map((p, i) => {
          const title = pick(p.title, lang)
          return (
            <article key={p.repo || title} className="project" style={{ '--i': i }}>
              <a
                className="project-media"
                href={p.demo || p.repo}
                target="_blank"
                rel="noreferrer"
                aria-label={t.openProject(title)}
                tabIndex={-1}
              >
                <img className="project-img" src={p.image} alt={t.projectScreenshot(title)} loading="lazy" />
              </a>
              <div className="project-body">
                <h3>{title}</h3>
                <p>{pick(p.description, lang)}</p>
                {p.tags.length > 0 && (
                  <ul className="project-tags" aria-label={t.techList}>
                    {p.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                )}
                <div className="project-links">
                  {p.demo && (
                    <a className="btn-gradient" href={p.demo} target="_blank" rel="noreferrer">
                      {t.viewDemo}
                    </a>
                  )}
                  {p.repo && (
                    <a className="btn-ghost" href={p.repo} target="_blank" rel="noreferrer">
                      {t.viewCode}
                    </a>
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
