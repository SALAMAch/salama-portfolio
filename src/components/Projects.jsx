import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { DATA } from '../data'
import { Icon, Reveal, Heading, Pill, Btn } from './ui'

export const CATS = ['All', ...Array.from(new Set(DATA.projects.map((p) => p.cat)))]

/* ---------------------------------------------------------- Modern Project Card (No Modal, Direct Screenshots & Live Links) */
export function ProjectCard({ p, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <motion.article
        whileHover={{ y: -8 }}
        className="glass card-hover group rounded-4xl overflow-hidden h-full flex flex-col border border-[var(--line)] bg-[var(--surface)] transition-all duration-300"
      >
        {/* 1. PROJECT SCREENSHOT WITH GLASS HOVER OVERLAY */}
        <div className="relative h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          {p.image ? (
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            /* Fallback Aesthetic Gradient Frame if image not loaded yet */
            <div className={`w-full h-full bg-gradient-to-br ${p.grad || 'from-[#FF8A75]/20 to-[#64DCC0]/20'} grid place-items-center`}>
              <span className="font-display text-2xl font-bold opacity-30 text-[var(--fg)]">{p.title}</span>
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 z-10 flex gap-1.5">
            <span className="rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-[var(--fg)] shadow-sm">
              {p.cat}
            </span>
          </div>

          {p.featured && (
            <span className="absolute top-3 right-3 z-10 rounded-full bg-amber-400/90 text-slate-900 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold flex items-center gap-1 shadow-sm">
              <Icon name="Star" size={11} /> featured
            </span>
          )}

          {/* Hover Glass Action Buttons */}
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3 p-4 z-20">
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white text-slate-900 px-4 py-2 text-xs font-bold flex items-center gap-1.5 shadow-lg hover:bg-[#64DCC0] transition-colors"
              >
                <Icon name="ExternalLink" size={13} /> Live Preview
              </a>
            )}
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-slate-900/90 text-white border border-white/20 px-4 py-2 text-xs font-bold flex items-center gap-1.5 shadow-lg hover:bg-[#FF8A75] transition-colors"
              >
                <Icon name="Github" size={13} /> Code / Details
              </a>
            )}
          </div>
        </div>

        {/* 2. CARD CONTENT */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-display text-xl font-semibold group-hover:text-[#FF8A75] transition-colors">
              {p.title}
            </h3>
            <span className="text-xs text-[var(--muted)] font-medium">{p.year}</span>
          </div>

          <p className="text-sm leading-relaxed text-[var(--muted)] mt-2 flex-1">
            {p.short}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-4">
            {p.tags.slice(0, 4).map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>

          {/* Quick Direct Link Footer */}
          <div className="mt-5 pt-4 border-t border-[var(--line)] flex items-center justify-between">
            {p.link ? (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF8A75] hover:text-[#64DCC0] transition-colors"
              >
                Visit Website
                <Icon name="ArrowUpRight" size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : (
              <span className="text-xs text-[var(--muted)] font-medium">Private / Client Project</span>
            )}
          </div>
        </div>
      </motion.article>
    </Reveal>
  )
}

/* ---------------------------------------------------------- Home preview */
export function ProjectsPreview({ go }) {
  const featured = DATA.projects
    .filter((p) => p.featured)
    .concat(DATA.projects.filter((p) => !p.featured))
    .slice(0, 3)

  return (
    <section id="work-preview" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Heading kicker="selected work" title="Projects I'm proud of" sub="Three of them here — the full, filterable collection lives on its own page." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} p={p} delay={i * 100} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Btn onClick={() => go('projects')} icon="ArrowRight">View all {DATA.projects.length} projects</Btn>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------- Dedicated page */
export function ProjectsPage({ go }) {
  const [cat, setCat] = useState('All')
  const [q, setQ] = useState('')

  const list = useMemo(
    () =>
      DATA.projects.filter((p) => {
        const inCat = cat === 'All' || p.cat === cat
        const term = q.trim().toLowerCase()
        const inQ = !term || `${p.title}${p.short}${p.tags.join(' ')}`.toLowerCase().includes(term)
        return inCat && inQ
      }),
    [cat, q],
  )

  return (
    <main className="pt-36 pb-24">
      <div className="mx-auto max-w-6xl px-4">
        <button onClick={() => go('home', 'home')} className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-[#FF8A75] transition-colors">
          <Icon name="ArrowLeft" size={16} /> Back home
        </button>

        <div className="mt-6 pop">
          <p className="font-hand text-3xl text-[#FF8A75]">the full collection</p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold grad-text leading-tight pb-1">Projects</h1>
          <p className="text-[var(--muted)] mt-3 max-w-2xl">
            {DATA.projects.length} builds across WordPress, e-commerce, front-end and full-stack.
          </p>
        </div>

        <div className="mt-9 glass rounded-4xl p-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  cat === c
                    ? 'text-white bg-gradient-to-r from-[#FF8A75] via-[#FFB088] to-[#64DCC0] shadow-md'
                    : 'text-[var(--muted)] border border-[var(--line)] hover:text-[#FF8A75] hover:border-[#FF8A75]'
                }`}
              >
                {c}
                <span className="ml-1.5 opacity-70 text-xs">
                  {c === 'All' ? DATA.projects.length : DATA.projects.filter((p) => p.cat === c).length}
                </span>
              </button>
            ))}
          </div>

          <div className="relative md:w-64">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--muted)]"><Icon name="Search" size={16} /></span>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search projects…"
              className="w-full rounded-full border border-[var(--line)] bg-[var(--surface)] pl-10 pr-4 py-2.5 text-sm outline-none transition-all focus:border-[#FF8A75] focus:ring-4 focus:ring-[#FF8A75]/15"
            />
          </div>
        </div>

        {list.length ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {list.map((p, i) => (
              <ProjectCard key={p.id} p={p} delay={(i % 3) * 90} />
            ))}
          </div>
        ) : (
          <div className="glass rounded-4xl p-14 text-center mt-8">
            <p className="text-5xl">🔍</p>
            <p className="font-display text-xl font-semibold mt-3">Nothing matches that yet</p>
            <p className="text-[var(--muted)] text-sm mt-1.5">Clear the search or pick another category to see the rest.</p>
            <div className="mt-6">
              <Btn variant="ghost" onClick={() => { setQ(''); setCat('All') }}>Reset filters</Btn>
            </div>
          </div>
        )}

        <div className="glass rounded-4xl p-9 md:p-12 mt-14 text-center relative overflow-hidden">
          <p className="font-hand text-3xl text-[#FF8A75] relative">next one could be yours</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-1 relative">Got a site that needs building?</h2>
          <div className="mt-6 relative">
            <Btn href={`mailto:${DATA.email}`} icon="Send">Start a project</Btn>
          </div>
        </div>
      </div>
    </main>
  )
}