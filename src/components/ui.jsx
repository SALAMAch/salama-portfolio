import { useState, useEffect, useRef } from 'react'
import * as Lucide from 'lucide-react'

/* Data-driven icon: <Icon name="Heart" /> — names come from data.js */
export function Icon({ name, size = 18, className = '', strokeWidth = 2 }) {
  const C = Lucide[name]
  if (!C) return <span className={className} style={{ width: size, height: size, display: 'inline-block' }} />
  return <C size={size} className={className} strokeWidth={strokeWidth} aria-hidden="true" />
}

/* Scroll-triggered fade + rise */
export function Reveal({ children, delay = 0, y = 26, className = '' }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setSeen(true); io.disconnect() } },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: seen ? 1 : 0,
        transform: seen ? 'none' : `translateY(${y}px)`,
        transition: 'opacity .7s cubic-bezier(.2,.8,.25,1), transform .7s cubic-bezier(.2,.8,.25,1)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export function Heading({ kicker, title, sub, center = true }) {
  return (
    <Reveal className={`mb-12 ${center ? 'text-center' : ''}`}>
      <p className="font-hand text-2xl text-[var(--pink)]">{kicker}</p>
      <h2 className="font-display text-4xl md:text-5xl font-semibold mt-1 grad-text leading-tight pb-1">{title}</h2>
      {sub && <p className={`text-[var(--muted)] mt-3 max-w-2xl ${center ? 'mx-auto' : ''}`}>{sub}</p>}
    </Reveal>
  )
}

export function Pill({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--muted)] ${className}`}>
      {children}
    </span>
  )
}

export function Btn({ children, onClick, href, variant = 'solid', icon, className = '' }) {
  const base = 'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300'
  
  // Gradient jdid m3a l-mint green: Coral -> Peach -> Mint
  const styles = variant === 'solid'
    ? 'text-white bg-gradient-to-r from-[#FF8A75] via-[#FFB088] to-[#64DCC0] hover:shadow-[0_14px_38px_-12px_rgba(255,138,117,.6)] hover:-translate-y-0.5'
    : 'glass text-[var(--txt)] hover:border-[var(--pink)] hover:-translate-y-0.5'

  const inner = (
    <>
      {children}
      {icon && <Icon name={icon} size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />}
    </>
  )

  return href
    ? <a href={href} className={`${base} ${styles} ${className}`}>{inner}</a>
    : <button onClick={onClick} className={`${base} ${styles} ${className}`}>{inner}</button>
}

/* Skill meter that fills once it scrolls into view */
export function Bar({ value, color }) {
  const ref = useRef(null)
  const [w, setW] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setW(value); io.disconnect() } },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value])

  return (
    <div ref={ref} className="h-2 w-full rounded-full bg-[var(--line)] overflow-hidden">
      <div
        className={`h-full rounded-full bg-gradient-to-r ${color}`}
        style={{ width: `${w}%`, transition: 'width 1.2s cubic-bezier(.2,.8,.25,1)', boxShadow: '0 0 12px rgba(255,122,168,.7)' }}
      />
    </div>
  )
}

export function Field({ label, value, onChange, placeholder, type = 'text' }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm outline-none transition-all focus:border-[var(--pink)] focus:ring-4 focus:ring-pinky/15"
      />
    </div>
  )
}
