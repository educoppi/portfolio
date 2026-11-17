import { useReveal } from '../hooks.js'

export default function SectionTitle({ children }) {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className={`section-title reveal reveal-left ${visible ? 'is-visible' : ''}`}>
      <h2>{children}</h2>
      <span className="accent-line" />
    </div>
  )
}
