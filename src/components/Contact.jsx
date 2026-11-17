import { CONTACT } from '../data/content.js'
import { useReveal } from '../hooks.js'
import { useI18n } from '../i18n.jsx'
import SectionTitle from './SectionTitle.jsx'

export default function Contact({ notify }) {
  const { t } = useI18n()
  const [ref, visible] = useReveal()

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email)
      notify(t.copied)
    } catch {
      notify(t.copyFailed)
    }
  }

  return (
    <section id="contato" className="section section-stack">
      <SectionTitle>{t.contactTitle}</SectionTitle>
      <div ref={ref} className={`contact reveal reveal-up ${visible ? 'is-visible' : ''}`}>
        <p className="contact-label">{t.copyHint}</p>
        <button type="button" className="contact-email" onClick={copyEmail}>
          {CONTACT.email}
          <span className="accent-line full" />
        </button>
        <a className="contact-mailto" href={`mailto:${CONTACT.email}`}>
          {t.mailto}
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
