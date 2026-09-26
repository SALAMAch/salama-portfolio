import { CustomCursor } from './components/CustomCursor'
import { useState, useEffect, useCallback } from 'react'
import { Nav, Hero, Marquee, About, Skills, Services, Experience, Education, Contact, Footer } from './components/Sections'
import { ProjectsPreview, ProjectsPage } from './components/Projects'

function HomePage({ go }) {
  return (
    <main>
      <CustomCursor />
      <Hero go={go} />
      <Marquee />
      <About />
      <Skills />
      <Services />
      <ProjectsPreview go={go} />
      <Experience />
      <Education />
      <Contact />
    </main>
  )
}

export default function App() {
  const [page, setPage] = useState('home')   // 'home' | 'projects'
  const [theme, setTheme] = useState('light')// change the theme mode

  useEffect(() => {
    try {
      const saved = localStorage.getItem('sc-theme')
      if (saved === 'dark' || saved === 'light') setTheme(saved)
      else if (window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark')
    } catch {
      /* storage unavailable — keep the light theme */
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('sc-theme', theme) } catch { /* ignore */ }
  }, [theme])

  const go = useCallback((target, anchor) => {
    if (target === 'projects') {
      setPage('projects')
      window.scrollTo({ top: 0 })
      return
    }
    setPage('home')
    requestAnimationFrame(() => {
      if (!anchor) return window.scrollTo({ top: 0, behavior: 'smooth' })
      const el = document.getElementById(anchor === 'work' ? 'work-preview' : anchor)
      window.scrollTo({ top: el ? el.offsetTop - 90 : 0, behavior: 'smooth' })
    })
  }, [])

  return (
    <>
      <Nav page={page} go={go} theme={theme} toggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} />
      {page === 'home'
        ? <HomePage go={go} />
        : <ProjectsPage go={go} />}
      <Footer go={go} />
    </>
  )
}