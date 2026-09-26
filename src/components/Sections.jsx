import { useState, useEffect } from 'react'
import { DATA, NAV } from '../data'
import { Icon, Reveal, Heading, Pill, Btn, Bar, Field } from './ui'

/* ---------------------------------------------------------- Nav */
export function Nav({ page, go, theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const click = (item) => { setOpen(false); go(item.page || 'home', item.page ? null : item.id) }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${solid ? 'py-2' : 'py-4'}`}>
      <div className="mx-auto max-w-6xl px-4">
        <nav className={`glass rounded-full flex items-center justify-between gap-3 pl-5 pr-3 transition-all duration-500 ${solid ? 'py-2' : 'py-3'}`}>
          <button onClick={() => go('home', 'home')} className="flex items-center gap-2.5 font-display text-lg font-semibold">
            {/* Image Logo */}
            <img 
              src="/Gemini_Generated_Image_d2wd2cd2wd2cd2wd-removebg-preview.png" 
              alt="Salama Logo" 
              className="h-9 w-auto object-contain" 
            />
          </button>

          <ul className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => click(item)}
                  className={`flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-300 hover:bg-[var(--surface)] hover:text-[#FF8A75] ${
                    page === 'projects' && item.page === 'projects' ? 'text-[#FF8A75] bg-[var(--surface)]' : 'text-[var(--muted)]'
                  }`}
                >
                  <Icon name={item.icon} size={15} />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button onClick={toggleTheme} aria-label="Switch theme" className="grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] text-[var(--muted)] hover:text-[#FF8A75] transition-colors">
              <Icon name={theme === 'dark' ? 'Sun' : 'Moon'} size={17} />
            </button>
            
            {/* "Hire me" button b Soft Coral -> Peach -> Mint Gradient */}
            <a href={`mailto:${DATA.email}`} className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF8A75] via-[#FFB088] to-[#64DCC0] px-5 py-2.5 text-sm font-semibold text-white hover:shadow-[0_12px_30px_-12px_rgba(255,138,117,0.6)] hover:-translate-y-0.5 transition-all duration-300">
              <Icon name="Send" size={15} /> Hire me
            </a>

            <button onClick={() => setOpen(!open)} aria-label="Menu" className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] text-[var(--txt)]">
              <Icon name={open ? 'X' : 'Menu'} size={18} />
            </button>
          </div>
        </nav>

        {open && (
          <ul className="lg:hidden glass mt-2 rounded-3xl p-2 pop">
            {NAV.map((item) => (
              <li key={item.id}>
                <button onClick={() => click(item)} className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium text-[var(--muted)] hover:bg-[var(--bg2)] hover:text-[#FF8A75]">
                  <Icon name={item.icon} size={16} />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  )
}
/* ---------------------------------------------------------- Hero */

export function Hero({ go }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  // --- TYPEWRITER DYNAMIQUE ---
  const phrases = [
    'Chakkar',
    'Web Developer',
    'WordPress Expert',
    'E-Commerce Dev'
  ]
  
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const targetPhrase = phrases[phraseIndex]
    const typingSpeed = isDeleting ? 60 : 120

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(targetPhrase.substring(0, currentText.length + 1))
        if (currentText === targetPhrase) {
          setTimeout(() => setIsDeleting(true), 1800)
        }
      } else {
        setCurrentText(targetPhrase.substring(0, currentText.length - 1))
        if (currentText === '') {
          setIsDeleting(false)
          setPhraseIndex((prev) => (prev + 1) % phrases.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, phraseIndex])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 25
      const y = (clientY / window.innerHeight - 0.5) * 25
      setMousePos({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden select-none"
    >
      {/* 1. Soft Ambient Blobs */}
      <div className="blob h-80 w-80 bg-[#FF8A75]/25 left-[-4rem] top-20 pointer-events-none" />
      <div className="blob h-96 w-96 bg-[#FFB088]/20 right-[-5rem] top-32 pointer-events-none" style={{ animationDelay: '-6s' }} />
      <div className="blob h-80 w-80 bg-[#64DCC0]/20 left-1/3 bottom-0 pointer-events-none" style={{ animationDelay: '-11s' }} />

      {/* 2. CORNER FLOWER CROP (PERFECT POSITION & DISTANCE) */}
<div 
  className="absolute -top-36 -left-36 sm:-top-40 sm:-left-40 z-0 pointer-events-none opacity-40 transition-transform duration-500 ease-out"
  style={{
    transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px) rotate(-10deg)`,
  }}
>
  <svg width="340" height="340" viewBox="0 0 260 260" fill="none" className="w-80 h-80 sm:w-96 sm:h-96">
    {/* 1. L-Khat L-Kharji L-Kabir (Marron - Perfectly Spaced & Shifted Up) */}
    <path
      d="M130 0 C162 -22, 206 -22, 206 20 C244 20, 256 62, 225 100 C256 138, 231 183, 193 183 C187 221, 143 234, 111 202 C80 234, 36 209, 42 171 C5 165, -7 122, 24 90 C-7 52, 18 8, 61 14 C67 -22, 111 -28, 130 0 Z"
      stroke="#8B5A2B"
      strokeWidth="1.6"
      strokeDasharray="5 4"
      fill="none"
    />
    
    {/* 2. L-Khat L-Wastani (Dashed Pink) */}
    <path
      d="M130 18 C157 -1, 194 -1, 194 34 C226 34, 236 70, 209 102 C236 134, 214 171, 182 171 C177 203, 139 214, 113 187 C87 214, 50 192, 55 160 C23 155, 12 118, 38 92 C12 60, 33 23, 70 28 C75 -4, 113 -10, 130 18 Z"
      stroke="#FF8A75"
      strokeWidth="1.8"
      strokeDasharray="6 4"
      fill="none"
    />
    
    {/* 3. L-Khat L-Dakhili (Mint Green) */}
    <path
      d="M130 36 C152 20, 182 20, 182 48 C208 48, 216 77, 194 103 C216 129, 198 159, 172 159 C168 185, 137 194, 115 172 C93 194, 63 177, 67 151 C41 147, 32 117, 54 95 C32 73, 49 43, 75 47 C79 21, 110 16, 130 36 Z"
      stroke="#64DCC0"
      strokeWidth="1.2"
      fill="none"
    />
    
    {/* 4. L-Wasat (Peach Circle) */}
    <circle cx="130" cy="130" r="26" stroke="#FFB088" strokeWidth="1.5" fill="none" />
  </svg>
</div>

      {/* 3. EXTRA RICH & LARGER FLOATING BACKGROUND (3D Wireframes + Flowers + Sparkles) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* ================= CENTER AREA (SUPER FILLED & LARGER) ================= */}
        
        {/* Center - Larger Mini Flower 1 */}
        <div 
          className="absolute top-[35%] left-[44%] opacity-55 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePos.x * 0.9}px, ${mousePos.y * 0.9}px)` }}
        >
          <svg width="55" height="55" viewBox="0 0 50 50" fill="none" className="floaty">
            <circle cx="25" cy="25" r="6" stroke="#FF8A75" strokeWidth="1.8" />
            <circle cx="25" cy="10" r="6" stroke="#FF8A75" strokeWidth="1.2" />
            <circle cx="25" cy="40" r="6" stroke="#FF8A75" strokeWidth="1.2" />
            <circle cx="10" cy="25" r="6" stroke="#FF8A75" strokeWidth="1.2" />
            <circle cx="40" cy="25" r="6" stroke="#FF8A75" strokeWidth="1.2" />
          </svg>
        </div>

        {/* Center - Big 3D Cube */}
        <div 
          className="absolute top-[44%] left-[53%] opacity-50 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)` }}
        >
          <svg width="65" height="65" viewBox="0 0 100 100" fill="none" className="floaty" style={{ animationDelay: '-2s' }}>
            <polygon points="30,20 70,20 85,35 45,35" stroke="#64DCC0" strokeWidth="1.6" />
            <polygon points="30,20 45,35 45,75 30,60" stroke="#64DCC0" strokeWidth="1.6" />
            <polygon points="45,35 85,35 85,75 45,75" stroke="#64DCC0" strokeWidth="1.6" />
            <line x1="70" y1="20" x2="85" y2="35" stroke="#FFB088" strokeWidth="1.4" />
          </svg>
        </div>

        {/* Center - Larger Cute Daisy */}
        <div 
          className="absolute top-[55%] left-[42%] opacity-55 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePos.x * 0.7}px, ${mousePos.y * 0.7}px)` }}
        >
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="floaty" style={{ animationDelay: '-3.5s' }}>
            <circle cx="25" cy="25" r="7" stroke="#FFB088" strokeWidth="1.8" />
            <path d="M25 3 C32 15, 32 15, 25 18 M25 47 C32 35, 32 35, 25 32 M3 25 C15 32, 15 32, 18 25 M47 25 C35 32, 35 32, 32 25" stroke="#FFB088" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Center - Big 3D Donut Ring */}
        <div 
          className="absolute top-[28%] left-[49%] opacity-45 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
        >
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none" className="spin-slow">
            <ellipse cx="50" cy="50" rx="42" ry="22" stroke="#FF8A75" strokeWidth="1.5" strokeDasharray="5 4" />
            <ellipse cx="50" cy="50" rx="22" ry="11" stroke="#64DCC0" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Center - Extra 3D Pyramid in Mid-center */}
        <div 
          className="absolute top-[48%] left-[47%] opacity-45 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePos.x * -0.6}px, ${mousePos.y * -0.6}px)` }}
        >
          <svg width="55" height="55" viewBox="0 0 100 100" fill="none" className="floaty" style={{ animationDelay: '-1s' }}>
            <polygon points="50,10 90,85 10,85" stroke="#8B5CF6" strokeWidth="1.5" />
            <line x1="50" y1="10" x2="50" y2="85" stroke="#64DCC0" strokeWidth="1.2" />
          </svg>
        </div>

        {/* Center Big Sparkles & Doodles */}
        <span className="floaty absolute top-[36%] left-[52%] text-3xl text-[#FFB088]/80 select-none font-bold" style={{ animationDelay: '-1s' }}>✦</span>
        <span className="floaty absolute top-[52%] left-[50%] text-2xl text-[#64DCC0]/80 select-none font-bold" style={{ animationDelay: '-2.5s' }}>✦</span>
        <span className="floaty absolute top-[32%] left-[41%] text-xl font-black text-[#FF8A75]/70 select-none">+</span>
        <span className="floaty absolute top-[58%] left-[48%] text-lg font-black text-[#FFB088]/70 select-none" style={{ animationDelay: '-4s' }}>✦</span>

        {/* ================= TOP & BOTTOM EXTENDED AREAS ================= */}

        {/* Top Center - Huge 3D Wireframe Sphere */}
        <div 
          className="absolute top-6 left-[36%] opacity-45 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)` }}
        >
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" className="spin-slow">
            <circle cx="50" cy="50" r="42" stroke="#FF8A75" strokeWidth="1.2" strokeDasharray="4 3" />
            <ellipse cx="50" cy="50" rx="42" ry="16" stroke="#FF8A75" strokeWidth="1" />
            <ellipse cx="50" cy="50" rx="16" ry="42" stroke="#64DCC0" strokeWidth="1" />
          </svg>
        </div>

        {/* Top Right - Big 3D Wireframe Icosahedron */}
        <div 
          className="absolute top-16 right-[12%] opacity-50 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePos.x * -0.8}px, ${mousePos.y * -0.8}px)` }}
        >
          <svg width="90" height="90" viewBox="0 0 100 100" fill="none" className="floaty">
            <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" stroke="#8B5CF6" strokeWidth="1.5" />
            <line x1="50" y1="5" x2="50" y2="95" stroke="#8B5CF6" strokeWidth="1" />
            <line x1="10" y1="25" x2="90" y2="75" stroke="#8B5CF6" strokeWidth="1" />
            <line x1="10" y1="75" x2="90" y2="25" stroke="#64DCC0" strokeWidth="1" />
          </svg>
        </div>

        {/* Mid Left - Flower & 3D Pyramid */}
        <div 
          className="absolute top-[26%] left-[6%] opacity-50 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePos.x * -0.6}px, ${mousePos.y * -0.6}px)` }}
        >
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="floaty" style={{ animationDelay: '-4s' }}>
            <circle cx="25" cy="25" r="6" stroke="#64DCC0" strokeWidth="1.8" />
            <circle cx="25" cy="10" r="6" stroke="#64DCC0" strokeWidth="1.2" />
            <circle cx="25" cy="40" r="6" stroke="#64DCC0" strokeWidth="1.2" />
            <circle cx="10" cy="25" r="6" stroke="#64DCC0" strokeWidth="1.2" />
            <circle cx="40" cy="25" r="6" stroke="#64DCC0" strokeWidth="1.2" />
          </svg>
        </div>

        {/* Bottom Left - Big 3D Wireframe Pyramid */}
        <div 
          className="absolute bottom-16 left-[8%] opacity-45 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)` }}
        >
          <svg width="85" height="85" viewBox="0 0 100 100" fill="none" className="floaty" style={{ animationDelay: '-1.5s' }}>
            <path d="M50 10 L90 85 L10 85 Z" stroke="#FFB088" strokeWidth="1.5" />
            <line x1="50" y1="10" x2="45" y2="85" stroke="#FF8A75" strokeWidth="1.2" />
            <line x1="10" y1="85" x2="90" y2="85" stroke="#FFB088" strokeWidth="1.2" />
          </svg>
        </div>

        {/* Bottom Center - Extra Flower */}
        <div 
          className="absolute bottom-12 left-[38%] opacity-50 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)` }}
        >
          <svg width="48" height="48" viewBox="0 0 50 50" fill="none" className="floaty" style={{ animationDelay: '-3s' }}>
            <circle cx="25" cy="25" r="7" stroke="#FF8A75" strokeWidth="1.8" />
            <path d="M25 3 C32 15, 32 15, 25 18 M25 47 C32 35, 32 35, 25 32 M3 25 C15 32, 15 32, 18 25 M47 25 C35 32, 35 32, 32 25" stroke="#FF8A75" strokeWidth="1.4" />
          </svg>
        </div>

        {/* Extra Floating Sparkles Everywhere */}
        <span className="floaty absolute top-24 left-[22%] text-2xl text-[#FFB088]/70 select-none">✦</span>
        <span className="floaty absolute bottom-24 right-[22%] text-3xl text-[#64DCC0]/70 select-none" style={{ animationDelay: '-3.5s' }}>✦</span>
        <span className="floaty absolute top-1/2 right-[4%] text-2xl text-[#FF8A75]/70 select-none" style={{ animationDelay: '-1.8s' }}>✦</span>

      </div>

      {/* 4. MAIN HERO CONTENT */}
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-[1.15fr_.85fr] gap-14 items-center w-full relative z-10">
        <div className="pop">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-1.5 text-xs font-medium text-[var(--muted)] shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#64DCC0] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#64DCC0]" />
            </span>
            {DATA.availability}
          </div>

          <p className="font-hand text-3xl text-[#FF8A75] mt-6">hi, I&rsquo;m</p>
          <h1 className="font-display text-[3.3rem] sm:text-[4.3rem] xl:text-[5.1rem] font-semibold leading-[1.05] tracking-tight min-h-[120px] sm:min-h-[160px]">
            <span className="grad-text">Salama</span>
            <br />
            <span className="text-[var(--fg)] inline-flex items-center">
              {currentText}
              <span className="animate-pulse text-[#FF8A75] ml-1 font-light">|</span>
            </span>
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <Pill><Icon name="Code2" size={13} /> {DATA.role}</Pill>
            <Pill><Icon name="MapPin" size={13} /> {DATA.location}</Pill>
          </div>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">{DATA.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Btn onClick={() => go('projects')} icon="ArrowRight">See my projects</Btn>
            <Btn variant="ghost" href={`mailto:${DATA.email}`} icon="Mail">Let&rsquo;s talk</Btn>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
            {DATA.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-semibold grad-text">{s.value}</p>
                <p className="text-xs text-[var(--muted)] mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Circular Showcase */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-square">
            
            {/* Glow Background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF8A75] via-[#FFB088] to-[#64DCC0] opacity-30 blur-2xl animate-pulse" />
            
            {/* Rotating Outer Text */}
            <div className="spin-slow absolute inset-[-10px] pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <path id="outerCirclePath" d="M 50, 50 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0" fill="none" />
                <text className="font-hand text-[5.8px] fill-[var(--muted)] tracking-[0.25em] uppercase">
                  <textPath href="#outerCirclePath">
                    ✦ CREATIVE WEB DEVELOPER ✦ CRAFTING WITH CARE ✦ FAST & SOFT ✦
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Decorative Rings */}
            <div className="spin-slow-reverse absolute inset-2 rounded-full border-2 border-dashed border-[#FF8A75]/30" />
            <div className="absolute inset-6 rounded-full border border-dotted border-[#64DCC0]/40" />

            {/* Main Circle Hub */}
            <div className="absolute inset-10 rounded-full glass glow-ring flex flex-col items-center justify-center p-6 text-center shadow-xl overflow-hidden gap-3">
              
              <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#FF8A75]/10 text-[#FF8A75] text-[11px] font-semibold">
                <Icon name="Sparkles" size={12} />
                <span>aesthetic dev</span>
              </div>

              <div className="space-y-0.5">
                <p className="font-hand text-2xl sm:text-3xl text-[#FF8A75] leading-tight">
                  turning ideas into
                </p>
                <p className="font-hand text-3xl sm:text-4xl grad-text font-bold leading-tight">
                  soft & fast
                </p>
                <p className="font-hand text-2xl sm:text-3xl text-[#64DCC0] leading-tight">
                  web experiences
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)] flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#64DCC0]" /> clean code
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--surface)] border border-[var(--line)] text-[var(--muted)] flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF8A75]" /> pixel perfect
                </span>
              </div>

            </div>

            {/* Floating Outer Badges */}
            <div className="floaty absolute -left-3 top-12 glass rounded-2xl px-3 py-2 text-xs font-semibold flex items-center gap-2 shadow-md">
              <Icon name="LayoutTemplate" size={14} className="text-[#FF8A75]" /> Custom WP
            </div>
            <div className="floaty absolute -right-3 top-28 glass rounded-2xl px-3 py-2 text-xs font-semibold flex items-center gap-2 shadow-md" style={{ animationDelay: '-2s' }}>
              <Icon name="ShoppingCart" size={14} className="text-[#FFB088]" /> WooCommerce
            </div>
            <div className="floaty absolute left-8 -bottom-1 glass rounded-2xl px-3 py-2 text-xs font-semibold flex items-center gap-2 shadow-md" style={{ animationDelay: '-4s' }}>
              <Icon name="Atom" size={14} className="text-[#64DCC0]" /> React & UI
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
/* ---------------------------------------------------------- Marquee */
export function Marquee() {
  const items = [...DATA.marquee, ...DATA.marquee]
  return (
    <div className="relative overflow-hidden border-y border-[var(--line)] bg-[var(--surface)] py-4">
      <div className="marquee flex w-max items-center gap-10 whitespace-nowrap">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-10 text-sm font-semibold tracking-wide text-[var(--muted)]">
            {t}
            <span className="text-[var(--pink)]">✿</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ---------------------------------------------------------- About */
export function About() {
  // Gradients m-nassqin l-facts icons
  const factGradients = [
    'from-[#FF8A75] to-[#FFB088]', // Coral -> Peach
    'from-[#4ECCA3] to-[#80ED99]', // Mint -> Green
    'from-[#FFB088] to-[#64DCC0]', // Peach -> Mint
    'from-[#A8DADC] to-[#B8C0FF]', // Soft Sky -> Lavender
  ]

  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Heading kicker="a little about me" title="Code with care, not clutter" sub="A developer who reads the brief twice and ships something a client can actually maintain." />
        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-8 items-start">
          <Reveal className="glass rounded-4xl p-8 md:p-10">
            <div className="space-y-5 text-[var(--muted)] leading-relaxed">
              {DATA.about.map((p, i) => (
                <p key={i} className={i === 0 ? 'text-lg text-[var(--txt)]' : ''}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {['Custom themes', 'ACF Pro', 'WooCommerce', 'Page speed', 'Migrations', 'Figma to WP'].map((t) => (
                <Pill key={t} className="hover:border-[var(--pink)] transition-colors"><Icon name="Sparkle" size={12} /> {t}</Pill>
              ))}
            </div>
          </Reveal>

          <div className="space-y-4">
            {DATA.facts.map((f, i) => (
              <Reveal key={f.text} delay={i * 90}>
                <div className="glass card-hover rounded-3xl p-5 flex items-center gap-4">
                  <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${factGradients[i % factGradients.length]} text-white shadow-sm`}>
                    <Icon name={f.icon} size={18} />
                  </span>
                  <p className="font-medium">{f.text}</p>
                </div>
              </Reveal>
            ))}
            
            {/* Card d "Women write great code" b Soft Coral & Mint Gradient */}
            <Reveal delay={400}>
              <div className="rounded-3xl p-6 bg-gradient-to-br from-[#FF8A75] via-[#FFB088] to-[#64DCC0] text-white shadow-[0_20px_50px_-20px_rgba(255,138,117,0.45)]">
                <p className="font-hand text-3xl">women write great code &mdash;</p>
                <p className="text-sm/relaxed opacity-90 mt-1">and great documentation. I leave every project with a handover guide so nobody is stuck waiting on me.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------- Skills */
export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Heading kicker="what I work with" title="Skills, honestly rated" sub="The stack I use every week, plus the parts I'm still deepening." />
        <div className="grid md:grid-cols-2 gap-6">
          {DATA.skills.map((g, gi) => (
            <Reveal key={g.group} delay={gi * 100}>
              <div className="glass card-hover rounded-4xl p-7 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl text-white bg-gradient-to-br ${g.color}`}>
                    <Icon name={g.icon} size={20} />
                  </span>
                  <h3 className="font-display text-xl font-semibold">{g.group}</h3>
                </div>
                <div className="space-y-4">
                  {g.items.map((it) => (
                    <div key={it.n}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="font-medium">{it.n}</span>
                        <span className="text-[var(--muted)]">{it.v}%</span>
                      </div>
                      <Bar value={it.v} color={g.color} />
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------- Services */
export function Services() {
  // Gradients dyal les icons w hover glows d les services
  const serviceGradients = [
    { bg: 'from-[#FF8A75] to-[#FFB088]', glow: 'from-[#FF8A75]/40 to-[#FFB088]/40' }, // Coral -> Peach
    { bg: 'from-[#4ECCA3] to-[#80ED99]', glow: 'from-[#4ECCA3]/40 to-[#80ED99]/40' }, // Mint -> Green
    { bg: 'from-[#A8DADC] to-[#B8C0FF]', glow: 'from-[#A8DADC]/40 to-[#B8C0FF]/40' }, // Sky -> Lavender
    { bg: 'from-[#FFB088] to-[#64DCC0]', glow: 'from-[#FFB088]/40 to-[#64DCC0]/40' }, // Peach -> Mint
    { bg: 'from-[#FFAAA5] to-[#FF8A75]', glow: 'from-[#FFAAA5]/40 to-[#FF8A75]/40' }, // Rose -> Coral
    { bg: 'from-[#64DCC0] to-[#A8DADC]', glow: 'from-[#64DCC0]/40 to-[#A8DADC]/40' }, // Mint -> Sky
  ]

  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Heading kicker="how I can help" title="Services" sub="Pick one, or hand over the whole build — brief to live site." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DATA.services.map((s, i) => {
            const theme = serviceGradients[i % serviceGradients.length]
            return (
              <Reveal key={s.title} delay={i * 80}>
                <div className="group glass card-hover rounded-4xl p-7 h-full relative overflow-hidden">
                  {/* Glow blur on hover */}
                  <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${theme.glow} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Service Icon Badge */}
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${theme.bg} text-white mb-5 shadow-sm`}>
                    <Icon name={s.icon} size={20} />
                  </span>
                  
                  <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)] mt-2">{s.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}


/* ---------------------------------------------------------- Experience */
export function Experience() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 20
      const y = (clientY / window.innerHeight - 0.5) * 20
      setMousePos({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="experience" className="relative py-24 overflow-hidden select-none">
      <div className="mx-auto max-w-6xl px-4 relative z-10">
        <Heading kicker="the road so far" title="Experience" sub="From front-end internships to running my own freelance builds." />
        <div className="relative mx-auto max-w-3xl pt-8">
          
          {/* Timeline Line (Coral -> Peach -> Mint) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF8A75] via-[#FFB088] to-[#64DCC0] md:-translate-x-1/2" />
          
          {DATA.experience.map((e, i) => {
            const isLeft = i % 2 === 0
            
            return (
              <Reveal key={e.period} delay={i * 90} className="relative pl-12 md:pl-0 pb-20 last:pb-0">
                {/* Timeline Dot */}
                <span className={`absolute left-4 md:left-1/2 top-4 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-[var(--bg)] ${
                  e.current ? 'bg-[#64DCC0] shadow-[0_0_0_5px_rgba(100,220,192,.28)]' : 'bg-gradient-to-br from-[#FF8A75] to-[#FFB088]'
                }`} />
                
                {/* 1. Glassy Experience Card */}
                <div className={`md:w-[calc(50%-2rem)] ${isLeft ? 'md:ml-auto md:pl-2' : 'md:mr-auto md:text-right md:pr-2'}`}>
                  <div className="glass card-hover rounded-4xl p-6 text-left relative z-20 shadow-lg">
                    <div className="flex flex-wrap items-center gap-2">
                      <Pill className={e.current ? 'text-[#64DCC0] font-semibold' : ''}>
                        <Icon name="CalendarDays" size={12} /> {e.period}
                      </Pill>
                      <Pill>{e.type}</Pill>
                    </div>
                    <h3 className="font-display text-xl font-semibold mt-3">{e.role}</h3>
                    <ul className="mt-3 space-y-2">
                      {e.points.map((pt) => (
                        <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-[var(--muted)]">
                          {/* List Bullet Dot */}
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-[#FF8A75] to-[#64DCC0]" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 2. CUTE SUBTLE FLOWERS IN EMPTY OPPOSITE SPACE (Now MUCH clearer & bigger) */}
                <div 
                  className={`absolute top-0 bottom-0 pointer-events-none hidden md:block transition-transform duration-300 ease-out z-0`}
                  style={{
                    left: isLeft ? '0' : 'auto',
                    right: isLeft ? 'auto' : '0',
                    width: 'calc(50% - 3.5rem)',
                    transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`
                  }}
                >
                  <div className={`relative w-full h-full flex flex-col justify-start items-center pt-8 ${isLeft ? 'pr-8' : 'pl-8'}`}>
                    
                    {/* Big Flower (Outline Doodle style, Bigger & Brighter) */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 scale-100 spin-slow-reverse opacity-80">
                      <svg width="220" height="220" viewBox="0 0 200 200" fill="none" className="w-56 h-56">
                        {/* Outer Petals (Dashed Coral) */}
                        <path
                          d="M100 20 C125 0, 160 0, 160 35 C190 35, 200 70, 175 100 C200 130, 180 165, 150 165 C145 195, 110 205, 85 180 C60 205, 25 185, 30 155 C0 150, -10 115, 15 90 C-10 60, 10 25, 45 30 C50 0, 85 -5, 100 20 Z"
                          stroke="#FF8A75"
                          strokeWidth="2.2"
                          strokeDasharray="7 5"
                          fill="#FF8A75"
                          fillOpacity="0.05"
                        />
                        {/* Inner Petal Line (Mint Green) */}
                        <path
                          d="M100 32 C120 15, 148 15, 148 44 C172 44, 180 72, 160 96 C180 120, 164 148, 140 148 C136 172, 108 180, 88 160 C68 180, 40 164, 44 140 C20 136, 12 108, 32 88 C12 68, 28 40, 52 44 C56 20, 84 15, 100 32 Z"
                          stroke="#64DCC0"
                          strokeWidth="1.6"
                          fill="none"
                        />
                        {/* Flower Center */}
                        <circle cx="100" cy="100" r="28" stroke="#FFB088" strokeWidth="2" fill="#FFB088" fillOpacity="0.1" />
                      </svg>
                    </div>

                    {/* 3 Small Flowers Around the Big One (Closer and more distinct) */}
                    
                    {/* Tiny Flower 1 (Top Left) */}
                    <div className="absolute top-0 right-1/4 scale-100 floaty opacity-80" style={{ animationDelay: '-1s' }}>
                      <svg width="40" height="40" viewBox="0 0 50 50" fill="none">
                        <circle cx="25" cy="25" r="5" stroke="#FF8A75" strokeWidth="1.8" />
                        <circle cx="25" cy="12" r="5" stroke="#FF8A75" strokeWidth="1.2" />
                        <circle cx="25" cy="38" r="5" stroke="#FF8A75" strokeWidth="1.2" />
                        <circle cx="12" cy="25" r="5" stroke="#FF8A75" strokeWidth="1.2" />
                        <circle cx="38" cy="25" r="5" stroke="#FF8A75" strokeWidth="1.2" />
                      </svg>
                    </div>

                    {/* Tiny Flower 2 (Mid Right) */}
                    <div className="absolute top-1/2 left-0 scale-100 floaty opacity-80" style={{ animationDelay: '-2.5s' }}>
                      <svg width="46" height="46" viewBox="0 0 50 50" fill="none">
                        <circle cx="25" cy="25" r="6" stroke="#64DCC0" strokeWidth="1.8" />
                        <path d="M25 5 C30 15, 30 15, 25 19 M25 45 C30 35, 30 35, 25 31 M5 25 C15 30, 15 30, 19 25 M45 25 C35 30, 35 30, 31 25" stroke="#64DCC0" strokeWidth="1.5" />
                      </svg>
                    </div>

                    {/* Tiny Flower 3 (Bottom Left) */}
                    <div className="absolute bottom-6 right-1/4 scale-100 floaty opacity-80" style={{ animationDelay: '-3.8s' }}>
                      <svg width="36" height="36" viewBox="0 0 50 50" fill="none">
                        <circle cx="25" cy="25" r="5" stroke="#FFB088" strokeWidth="1.8" />
                        <circle cx="25" cy="12" r="5" stroke="#FFB088" strokeWidth="1.2" />
                        <circle cx="25" cy="38" r="5" stroke="#FFB088" strokeWidth="1.2" />
                        <circle cx="12" cy="25" r="5" stroke="#FFB088" strokeWidth="1.2" />
                        <circle cx="38" cy="25" r="5" stroke="#FFB088" strokeWidth="1.2" />
                      </svg>
                    </div>

                    {/* Sparkling Stars (Closer and shinier) */}
                    <span className="absolute top-1/2 left-1/4 text-3xl text-[#FFB088] opacity-70 floaty font-bold" style={{ animationDelay: '-1.5s' }}>✦</span>
                    <span className="absolute bottom-12 right-2 text-2xl text-[#64DCC0] opacity-70 floaty font-bold" style={{ animationDelay: '-3.2s' }}>✦</span>
                    <span className="absolute top-[20%] right-6 text-xl text-[#FF8A75] opacity-70 floaty font-bold" style={{ animationDelay: '-4.1s' }}>✦</span>
                  </div>
                </div>

              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
/* ---------------------------------------------------------- Education */
export function Education() {
  // Gradients dyal les cards d Education
  const eduGradients = [
    'from-[#FF8A75] to-[#FFB088]', // Soft Coral -> Peach
    'from-[#4ECCA3] to-[#80ED99]', // Mint Green -> Soft Green
    'from-[#A8DADC] to-[#B8C0FF]', // Sky Blue -> Lavender
  ]

  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Heading kicker="where I learned it" title="Education" />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {DATA.education.map((e, i) => (
            <Reveal key={e.title} delay={i * 110}>
              <div className="glass card-hover rounded-4xl p-7 h-full">
                <div className="flex items-start gap-4">
                  {/* Icon Badge b gradient jdid */}
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${eduGradients[i % eduGradients.length]} text-white shadow-sm`}>
                    <Icon name={e.icon} size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold leading-snug">{e.title}</h3>
                    <p className="text-sm text-[var(--muted)] mt-1">{e.school}</p>
                    <Pill className="mt-3"><Icon name="CalendarDays" size={12} /> {e.period}</Pill>
                    <p className="text-sm text-[var(--muted)] mt-3 leading-relaxed">{e.note}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------- Contact */
export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })
  const ready = form.name.trim() && form.message.trim()

  const send = () => {
    const body = `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`
    window.location.href = `mailto:${DATA.email}?subject=${encodeURIComponent(`Project enquiry from ${form.name || 'your site'}`)}&body=${encodeURIComponent(body)}`
  }

  const cards = [
    { icon: 'Mail', label: 'Email', value: DATA.email, href: `mailto:${DATA.email}`, grad: 'from-[#FF8A75] to-[#FFB088]' }, // Coral -> Peach
    { icon: 'Phone', label: 'Phone', value: DATA.phone, href: `tel:${DATA.phone}`, grad: 'from-[#4ECCA3] to-[#80ED99]' }, // Mint -> Green
    { icon: 'MapPin', label: 'Location', value: DATA.location, href: null, grad: 'from-[#FFB088] to-[#64DCC0]' }, // Peach -> Mint
  ]

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Heading kicker="say hello" title="Let's build something soft and fast" sub="Tell me what you need. I answer within a day, usually sooner." />
        <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-6">
          <div className="space-y-4">
            {cards.map((c, i) => {
              const Tag = c.href ? 'a' : 'div'
              return (
                <Reveal key={c.label} delay={i * 90}>
                  <Tag href={c.href || undefined} className="glass card-hover rounded-3xl p-5 flex items-center gap-4">
                    {/* Icon Badge b Gradient m-nassaq */}
                    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${c.grad} text-white shadow-sm`}>
                      <Icon name={c.icon} size={18} />
                    </span>
                    <span>
                      <span className="block text-xs text-[var(--muted)]">{c.label}</span>
                      <span className="block font-medium break-all">{c.value}</span>
                    </span>
                  </Tag>
                </Reveal>
              )
            })}
            <Reveal delay={300}>
              <div className="glass rounded-3xl p-5">
                <p className="text-xs text-[var(--muted)] mb-3">Find me online</p>
                <div className="flex gap-2.5">
                  {DATA.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      target="_blank"
                      rel="noreferrer"
                      /* Hover b Soft Coral -> Mint Gradient */
                      className="grid h-11 w-11 place-items-center rounded-2xl border border-[var(--line)] text-[var(--muted)] hover:text-white hover:bg-gradient-to-br hover:from-[#FF8A75] hover:to-[#64DCC0] hover:border-transparent transition-all duration-300 shadow-sm"
                    >
                      <Icon name={s.icon} size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="glass rounded-4xl p-7 md:p-9">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Your name" value={form.name} onChange={set('name')} placeholder="Amina B." />
                <Field label="Your email" value={form.email} onChange={set('email')} placeholder="you@studio.com" type="email" />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium mb-1.5">What are we building?</label>
                <textarea
                  value={form.message}
                  onChange={set('message')}
                  rows={5}
                  placeholder="A WooCommerce store for my bakery, around 40 products…"
                  /* Focus ring b Soft Coral */
                  className="w-full rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm outline-none transition-all focus:border-[#FF8A75] focus:ring-4 focus:ring-[#FF8A75]/15 resize-none"
                />
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <Btn onClick={send} icon="Send" className={ready ? '' : 'opacity-50 pointer-events-none'}>Send message</Btn>
                <p className="text-xs text-[var(--muted)]">Opens your mail app with the message ready.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------- Footer */
export function Footer({ go }) {
  return (
    <footer className="border-t border-[var(--line)] py-10">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
        <p className="flex items-center gap-1.5">
          Made with <span className="text-[var(--pink)]"><Icon name="Heart" size={14} /></span> by {DATA.name} · Marrakech
        </p>
        <div className="flex items-center gap-5">
          <button onClick={() => go('home', 'home')} className="hover:text-[var(--pink)] transition-colors">Home</button>
          <button onClick={() => go('projects')} className="hover:text-[var(--pink)] transition-colors">Projects</button>
          <a href={`mailto:${DATA.email}`} className="hover:text-[var(--pink)] transition-colors">Email</a>
        </div>
      </div>
    </footer>
  )
}
