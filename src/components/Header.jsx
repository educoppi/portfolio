import { useEffect, useState } from 'react'
import { NAV_LINKS, THEMES } from '../data/content.js'
import { scrollToSection, useActiveSection, useScrolled } from '../hooks.js'

const SECTION_IDS = NAV_LINKS.map((l) => l.id)

export default function Header({ theme, onThemeChange }) {
  const scrolled = useScrolled()
  const active = useActiveSection(SECTION_IDS)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showHint, setShowHint] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 8000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const goTo = (id) => (e) => {
    e.preventDefault()
    setMenuOpen(false)
    scrollToSection(id)
  }

  return (
    <header className={`header ${scrolled || menuOpen ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <div className="brand">
          <a href="#inicio" onClick={goTo('inicio')} className="logo">
            <span className="accent">E</span>duardo
          </a>

          <div className="theme-picker" role="radiogroup" aria-label="Cor tema do site">
            {THEMES.map((t) => (
              <button
                key={t.id}
                type="button"
                role="radio"
                aria-checked={theme.id === t.id}
                aria-label={t.label}
                title={t.label}
                className={`theme-dot ${theme.id === t.id ? 'is-active' : ''}`}
                style={{ '--dot': t.color }}
                onClick={() => {
                  onThemeChange(t.id)
                  setShowHint(false)
                }}
              />
            ))}
            <p className={`theme-hint ${showHint ? '' : 'is-hidden'}`} aria-hidden="true">
              👈 Mude a cor tema do site
            </p>
          </div>
        </div>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="nav"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="nav" className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label="Principal">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={goTo(link.id)}
                  className={active === link.id ? 'is-active' : ''}
                  aria-current={active === link.id ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
