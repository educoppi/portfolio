import { useEffect, useState } from 'react'
import { NAV_LINKS, THEMES } from '../data/content.js'
import { scrollToSection, useActiveSection, useScrolled } from '../hooks.js'
import { LANGUAGES, useI18n } from '../i18n.jsx'

export default function Header({ theme, onThemeChange }) {
  const { t, lang, setLang } = useI18n()
  const scrolled = useScrolled()
  const active = useActiveSection(NAV_LINKS)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showHint, setShowHint] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 8000)
    return () => clearTimeout(timer)
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

          <div className="theme-picker" role="radiogroup" aria-label={t.themeLabel}>
            {THEMES.map((th) => (
              <button
                key={th.id}
                type="button"
                role="radio"
                aria-checked={theme.id === th.id}
                aria-label={t.themes[th.id]}
                title={t.themes[th.id]}
                className={`theme-dot ${theme.id === th.id ? 'is-active' : ''}`}
                style={{ '--dot': th.color }}
                onClick={() => {
                  onThemeChange(th.id)
                  setShowHint(false)
                }}
              />
            ))}
            <p className={`theme-hint ${showHint ? '' : 'is-hidden'}`} aria-hidden="true">
              {t.themeHint}
            </p>
          </div>
        </div>

        <nav id="nav" className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label={t.navLabel}>
          <ul>
            {NAV_LINKS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={goTo(id)}
                  className={active === id ? 'is-active' : ''}
                  aria-current={active === id ? 'true' : undefined}
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <div className="lang-switch" role="radiogroup" aria-label={t.languageLabel}>
            {LANGUAGES.map((l) => (
              <button
                key={l.id}
                type="button"
                role="radio"
                lang={l.htmlLang}
                aria-checked={lang === l.id}
                aria-label={l.name}
                title={l.name}
                className={lang === l.id ? 'is-active' : ''}
                onClick={() => setLang(l.id)}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
            aria-label={menuOpen ? t.closeMenu : t.openMenu}
            aria-expanded={menuOpen}
            aria-controls="nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
