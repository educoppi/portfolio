import { useEffect, useRef, useState } from 'react'
import { THEMES } from './data/content.js'

const STORAGE_KEY = 'portfolio-theme'

function readStoredTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

/** Cor tema do site: aplica a variável CSS --accent, troca o favicon e lembra a escolha. */
export function useTheme() {
  const [themeId, setThemeId] = useState(() => {
    const stored = readStoredTheme()
    return THEMES.some((t) => t.id === stored) ? stored : THEMES[0].id
  })
  const theme = THEMES.find((t) => t.id === themeId)

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', theme.color)
    const favicon = document.getElementById('favicon')
    if (favicon) favicon.href = theme.favicon
    try {
      localStorage.setItem(STORAGE_KEY, theme.id)
    } catch {
      /* armazenamento indisponível: segue sem persistir */
    }
  }, [theme])

  return [theme, setThemeId]
}

/** true quando a página rolou além de `offset` px. */
export function useScrolled(offset = 50) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])
  return scrolled
}

/** Revela o elemento (uma única vez) quando ele entra na tela. */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}

/** Seção visível no momento, para destacar o link ativo do menu. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const onScroll = () => {
      const probe = window.innerHeight * 0.4
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= probe) current = id
      }
      // no fim da página, a última seção é a ativa
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = ids[ids.length - 1]
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids])
  return active
}

export function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
