import { CONTACT } from '../data/content.js'
import { useReveal } from '../hooks.js'
import SectionTitle from './SectionTitle.jsx'

export default function Contact({ notify }) {
  const [ref, visible] = useReveal()

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email)
      notify('Email copiado!')
    } catch {
      notify('Falha ao copiar. Por favor, copie manualmente.')
    }
  }

  return (
    <section id="contato" className="section section-stack">
      <SectionTitle>Contato</SectionTitle>
      <div ref={ref} className={`contact reveal reveal-up ${visible ? 'is-visible' : ''}`}>
        <p className="contact-label">clique para copiar o email:</p>
        <button type="button" className="contact-email" onClick={copyEmail}>
          {CONTACT.email}
          <span className="accent-line full" />
        </button>
        <a className="contact-mailto" href={`mailto:${CONTACT.email}`}>
          ou envie uma mensagem direto →
        </a>
        <div className="contact-socials">
          {CONTACT.socials.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name}>
              <img src={s.icon} alt="" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
