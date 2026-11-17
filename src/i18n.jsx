import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export const LANGUAGES = [
  { id: 'en', label: 'EN', name: 'English', htmlLang: 'en' },
  { id: 'pt', label: 'PT', name: 'Português', htmlLang: 'pt-BR' },
]
const DEFAULT_LANG = 'en'
const STORAGE_KEY = 'portfolio-lang'

const STRINGS = {
  en: {
    metaDescription: 'Portfolio of Eduardo Coppi, software developer focused on backend.',
    nav: { inicio: 'Home', sobre: 'About me', projetos: 'Projects', contato: 'Contact' },
    navLabel: 'Main',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    themeLabel: 'Site theme color',
    themeHint: '👈 Change the site theme color',
    themes: { red: 'Red', purple: 'Purple', blue: 'Blue' },
    languageLabel: 'Language',
    role: 'Software Developer',
    scrollCue: 'Scroll to About me',
    aboutTitle: 'About me',
    about1: (A) => (
      <>
        Software Developer trained at <A>SENAI</A>, focused on building technology solutions for small and large
        companies. <A>Determined</A>, <A>proactive</A> and <A>collaborative</A> are the traits that make me a
        professional able to turn ideas into efficient solutions.
      </>
    ),
    about2: (A) => (
      <>
        My goal is to establish myself as a <A>backend</A> developer: I build <A>REST</A> APIs with <A>Java</A> and{' '}
        <A>Spring Boot</A> and design databases with <A>SQL</A>, aiming for clean, organized and maintainable code. I
        also work on the frontend with <A>React</A> and <A>TypeScript</A>, which gives me an end-to-end view of the
        application, but the server side is where I want to grow and specialize.
      </>
    ),
    projectsTitle: 'Projects',
    openProject: (title) => `Open ${title}`,
    projectScreenshot: (title) => `Screenshot of ${title}`,
    techList: 'Technologies',
    viewDemo: 'Live demo',
    viewCode: 'Code on GitHub',
    contactTitle: 'Contact',
    copyHint: 'click to copy the email:',
    mailto: 'or send me a message directly →',
    copied: 'Email copied!',
    copyFailed: 'Could not copy. Please copy it manually.',
  },
  pt: {
    metaDescription: 'Portfolio de Eduardo Coppi, desenvolvedor de software com foco em backend.',
    nav: { inicio: 'Início', sobre: 'Sobre mim', projetos: 'Projetos', contato: 'Contato' },
    navLabel: 'Principal',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    themeLabel: 'Cor tema do site',
    themeHint: '👈 Mude a cor tema do site',
    themes: { red: 'Vermelho', purple: 'Roxo', blue: 'Azul' },
    languageLabel: 'Idioma',
    role: 'Desenvolvedor de Software',
    scrollCue: 'Rolar para Sobre mim',
    aboutTitle: 'Sobre mim',
    about1: (A) => (
      <>
        Desenvolvedor de Software formado pelo <A>SENAI</A>, com foco em criar soluções tecnológicas para pequenas e
        grandes empresas. <A>Determinado</A>, <A>proativo</A> e <A>colaborativo</A>, são os adjetivos que me tornam
        um profissional capaz de transformar ideias em soluções eficientes.
      </>
    ),
    about2: (A) => (
      <>
        Meu objetivo é me consolidar como desenvolvedor <A>backend</A>: construo APIs <A>REST</A> com <A>Java</A> e{' '}
        <A>Spring Boot</A> e modelo bancos de dados com <A>SQL</A>, buscando código limpo, organizado e fácil de
        manter. Também trabalho no frontend com <A>React</A> e <A>TypeScript</A>, o que me dá uma visão da aplicação
        de ponta a ponta, mas é no servidor que quero crescer e me especializar.
      </>
    ),
    projectsTitle: 'Projetos',
    openProject: (title) => `Abrir ${title}`,
    projectScreenshot: (title) => `Tela do projeto ${title}`,
    techList: 'Tecnologias',
    viewDemo: 'Ver demo',
    viewCode: 'Código no GitHub',
    contactTitle: 'Contato',
    copyHint: 'clique para copiar o email:',
    mailto: 'ou envie uma mensagem direto →',
    copied: 'Email copiado!',
    copyFailed: 'Falha ao copiar. Por favor, copie manualmente.',
  },
}

function readStoredLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return LANGUAGES.some((l) => l.id === stored) ? stored : null
  } catch {
    return null
  }
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => readStoredLang() ?? DEFAULT_LANG)

  useEffect(() => {
    const t = STRINGS[lang]
    document.documentElement.lang = LANGUAGES.find((l) => l.id === lang).htmlLang
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.metaDescription)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* armazenamento indisponível: segue sem persistir */
    }
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: STRINGS[lang] }), [lang])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

/** { lang, setLang, t } — `t` traz os textos do idioma atual. */
export function useI18n() {
  return useContext(LanguageContext)
}

/** Escolhe a versão de um campo traduzido ({ en, pt }) ou devolve o próprio valor. */
export function pick(value, lang) {
  return value && typeof value === 'object' && !Array.isArray(value) ? (value[lang] ?? value[DEFAULT_LANG]) : value
}
