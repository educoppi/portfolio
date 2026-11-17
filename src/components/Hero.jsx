import { CONTACT } from '../data/content.js'
import { scrollToSection } from '../hooks.js'

export default function Hero() {
  const github = CONTACT.socials.find((s) => s.name === 'GitHub')
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-content">
        <h1>Eduardo Coppi</h1>
        <span className="accent-line full" />
        <p className="hero-role">Desenvolvedor de Software</p>
        <a className="hero-social" href={github.href} target="_blank" rel="noreferrer" aria-label="GitHub">
          <img src={github.icon} alt="" />
        </a>
      </div>
      <a
        href="#sobre"
        className="scroll-cue"
        aria-label="Rolar para Sobre mim"
        onClick={(e) => {
          e.preventDefault()
          scrollToSection('sobre')
        }}
      >
        <span />
      </a>
    </section>
  )
}
