import { useCallback, useRef, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Toast from './components/Toast.jsx'
import { useTheme } from './hooks.js'

export default function App() {
  const [theme, setTheme] = useTheme()
  const [toast, setToast] = useState(null)
  const timer = useRef()

  const notify = useCallback((message) => {
    clearTimeout(timer.current)
    setToast({ message, key: Date.now() })
    timer.current = setTimeout(() => setToast(null), 4000)
  }, [])

  return (
    <>
      <Header theme={theme} onThemeChange={setTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact notify={notify} />
      </main>
      <Footer />
      <Toast toast={toast} />
    </>
  )
}
