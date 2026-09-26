# Salama Chakkar — Portfolio

A React + Tailwind + Framer Motion portfolio. Soft, bright, glowing, with a dedicated
filterable Projects page and case-study modals.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

Node 18 or newer.

## Where to edit

Everything you'd want to change lives in **`src/data.js`** — name, contact details,
stats, about paragraphs, skills (with the 0–100 meter values), services, projects,
experience and education. No component edits needed.

### Adding a project

Push a new object onto `DATA.projects`:

```js
{
  id: "unique-slug",
  title: "Client Name",
  cat: "WordPress",                 // becomes a filter chip automatically
  year: "2026",
  emoji: "🌷",
  grad: "from-pinky/80 to-lilac/70", // Tailwind gradient for the card header
  featured: true,                    // shows on the home page + gets a badge
  short: "One line for the card.",
  long: "A paragraph for the modal.",
  tags: ["WordPress", "ACF"],
  features: ["Bullet 1", "Bullet 2"],
  result: "What changed for the client."
}
```

Icon names (`icon:` fields, nav, facts) are [Lucide](https://lucide.dev) icon names in
PascalCase — `Heart`, `ShoppingCart`, `GraduationCap`, and so on.

## Structure

```
src/
  data.js                 all content
  index.css               design tokens, animations, Tailwind layers
  App.jsx                 page routing (home | projects), theme state
  components/
    ui.jsx                Icon, Reveal, Heading, Pill, Btn, Bar, Field
    Sections.jsx          Nav, Hero, Marquee, About, Skills, Services,
                          Experience, Education, Contact, Footer
    Projects.jsx          ProjectCard, ProjectModal, ProjectsPreview, ProjectsPage
```

## Theming

Colours are CSS variables in `src/index.css` under `:root` (light) and
`[data-theme="dark"]`. Change `--pink`, `--lilac`, `--peach`, `--mint` to restyle the
whole site; the matching Tailwind names (`pinky`, `lilac`, `peach`, `mint`) live in
`tailwind.config.js`.

## Deploying

The build output is static — drop `/dist` on Netlify, Vercel, GitHub Pages or any host.

---

Also included: `salama-portfolio-standalone.html` — the same site in a single file with
no build step. Open it in a browser or upload it anywhere as-is.
