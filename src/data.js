// ============================================================
// All portfolio content lives here. Edit this file only.
// ============================================================

export const DATA = {
  name: "Salama Chakkar",
  first: "Salama",
  role: "WordPress, Full-Stack & E-Commerce Developer",
  tagline: "I build custom full-stack web apps, WordPress sites, and e-commerce platforms that load fast, look clean, and sell well.",
  location: "Marrakech, Morocco",
  email: "salamachakkar1@gmail.com",
  phone: "0647121367",
  availability: "Open to WordPress / E-commerce roles & freelance projects",
  socials: [
    { label: "GitHub", icon: "Github", href: "https://github.com/" },
    { label: "LinkedIn", icon: "Linkedin", href: "https://www.linkedin.com/" },
    { label: "Email", icon: "Mail", href: "mailto:salamachakkar1@gmail.com" }
  ],
  stats: [
    { value: "10+", label: "sites shipped" },
    { value: "4", label: "roles since 2025" },
    { value: "100%", label: "responsive builds" },
    { value: "<3s", label: "typical load time" }
  ],
  about: [
    "I'm a full-stack web developer from Marrakech who specialises in custom web applications, React, Laravel, and WordPress solutions (custom themes, Elementor, ACF, WooCommerce, and Shopify). I like the part of the job where a flat mockup turns into a real, functional site or app someone can actually run their business on.",
    "I handle the whole chain — full-stack development, design integration, custom fields, payments, SEO, deployment and migration — so a client never has to hand the project to three different people."
  ],
  facts: [
    { icon: "MapPin", text: "Based in Tamansourt, Marrakech" },
    { icon: "Languages", text: "Arabic · French · English" },
    { icon: "Rocket", text: "Freelancing since July 2026" },
    { icon: "Coffee", text: "Mint tea over coffee, always" }
  ],
  skills: [
  { 
    group: "CMS & E-commerce", 
    icon: "ShoppingBag", 
    color: "from-[#FF8A75] to-[#FFB088]", // Warm Coral -> Peach
    items: [ {n:"WordPress",v:95},{n:"Elementor",v:92},{n:"WooCommerce",v:88},{n:"ACF & Custom Post Types",v:85},{n:"Shopify",v:72} ] 
  },
  { 
    group: "Front-End", 
    icon: "Palette", 
    color: "from-[#4ECCA3] to-[#80ED99]", // Fresh Mint -> Soft Green
    items: [ {n:"HTML5 & CSS3",v:94},{n:"JavaScript",v:82},{n:"ReactJS",v:94},{n:"Bootstrap / Tailwind",v:86},{n:"Responsive Design",v:93} ] 
  },
  { 
    group: "Back-End & Data", 
    icon: "Database", 
    color: "from-[#FFAAA5] to-[#FFD3B6]", // Soft Rose -> Vanilla Cream
    items: [ {n:"PHP",v:89},{n:"Laravel",v:83},{n:"SQL / MySQL",v:83},{n:"Python",v:62} ] 
  },
  { 
    group: "Tools & Design", 
    icon: "Wand2", 
    color: "from-[#A8DADC] to-[#B8C0FF]", // Soft Sky Blue -> Pastel Lavender
    items: [ {n:"Git",v:80},{n:"Technical SEO",v:82},{n:"Figma",v:76},{n:"Canva",v:88} ] 
  }
],
  services: [
  { icon:"Code2", title:"Full-Stack Web Apps", desc:"Custom web applications built from scratch using React, Laravel, and SQL. Clean architecture, robust back-end logic, and scalable code." },
  { icon:"Layout", title:"Custom WordPress sites", desc:"Themes built directly from your Figma file, not a bought template. Clean structure, custom post types, and editable everywhere." },
  { icon:"ShoppingCart", title:"WooCommerce stores", desc:"Full e-commerce setup with products, variations, taxes, shipping, and secure payment gateways tested end to end." },
  { icon:"Blocks", title:"ACF & custom fields", desc:"Advanced custom fields and dynamic field groups built precisely so your team edits content seamlessly without touching a single plugin." },
  { icon:"Gauge", title:"Speed & SEO tune-up", desc:"Comprehensive Core Web Vitals audit, image strategy, caching implementation, metadata, and structured data on existing sites." },
  { icon:"Server", title:"Migration & deployment", desc:"Seamless host moves, staging-to-live transfers, domain setup, SSL certificates, and automated backups — with nothing lost in transit." }
],
  projects: [
    {
      id: 'zenova-tech',
      title: 'Zenova Tech',
      cat: 'E-Commerce',
      year: '2026',
      featured: true,
      image: '/zenovatech.png',
      link: 'https://zenovatech.wuaze.com/',
      short: 'Modern e-commerce platform for smartphones and tech accessories built with custom PHP, SQL, and Bootstrap grid filters.',
      tags: ['PHP', 'SQL', 'JavaScript', 'Bootstrap']
    },
    {
      id: 'luxe-beauty',
      title: 'LuxeBeauty',
      cat: 'E-Commerce',
      year: '2026',
      featured: false,
      image: '/screencapture-luxebeauty-.png',
      link: 'https://luxebeauty.wuaze.com/',
      short: 'Aesthetic skincare brand e-commerce store built with WordPress, Elementor, and custom styles.',
      tags: ['WordPress', 'Elementor', 'WooCommerce', 'ACF']
    },
    {
      id: 'la-terrasse',
      title: 'Terace',
      cat: 'WordPress',
      year: '2026',
      featured: true,
      image: '/terace.PNG',
      link: 'https://laterrasse.wuaze.com/',
      short: 'Charming restaurant website featuring custom post types, ACF fields, and a polished WordPress setup.',
      tags: ['WordPress', 'Elementor', 'ACF', 'CPT']
    },
    {
      id: 'vet-care',
      title: 'VetCare',
      cat: 'Development',
      year: '2026',
      featured: true,
      image: '/vetcare.png',
      link: 'https://larkspur-vet.wuaze.com/',
      github: 'https://github.com/...',
      short: 'Full-service veterinary care and spa-grade grooming web application built with Laravel and Tailwind CSS.',
      tags: ['Laravel', 'PHP', 'Tailwind CSS', 'MySQL']
    },
    {
      id: 'riad-royal',
      title: 'Riad Royal',
      cat: 'Development',
      year: '2026',
      featured: true,
      image: '/riad_royal.png',
      link: 'https://riad-royal.wuaze.com/',
      short: 'Exclusive private palace showcase featuring historical heritage, booking integration, and responsive Laravel design.',
      tags: ['Laravel', 'PHP', 'Tailwind CSS', 'MySQL']
    },
    {
      id: 'cafe-luxe',
      title: 'Cafe Luxe',
      cat: 'E-Commerce',
      year: '2026',
      featured: false,
      image: '/Captuuuure.PNG',
      link: 'https://cafe-luxe-react.vercel.app/',
      github: 'https://github.com/...',
      short: 'Modern e-commerce frontend platform for a luxury coffee brand built with React JS.',
      tags: ['React JS', 'Tailwind CSS', 'JavaScript', 'Vite']
    },
    {
      id: 'novae-studio',
      title: 'Novae Studio (In Progress)',
      cat: 'WordPress',
      year: '2026',
      featured: false,
      image: '/novae.png',
      link: '#',
      github: 'https://github.com/...',
      short: 'Sophisticated portfolio platform for an interior design studio currently in development using WordPress and Elementor.',
      tags: ['WordPress', 'Elementor', 'JavaScript', 'In Progress']
    },
    {
      id: 'dev-portfolio',
      title: 'Dev Portfolio',
      cat: 'WordPress',
      year: '2026',
      featured: false,
      image: '/portfolio.PNG', 
      link: 'https://salamachakkar.site.je/', 
      github: 'https://github.com/...',
      short: 'Personal web development portfolio showcasing custom WordPress themes, interactive UI, and responsive layouts.',
      tags: ['WordPress', 'Elementor', 'CSS', 'JavaScript']
    },
    {
      id: 'flowcraft-ai',
      title: 'FlowCraft AI',
      cat: 'Development',
      year: '2026',
      featured: false,
      image: '/saasPNG.PNG', // baddli smiya d l'image 3la hssab li 3andk
      link: 'https://flowcraft-ai-app.netlify.app/', // wla l'link dyalu ila kan mpondi
      github: 'https://github.com/...',
      short: 'Modern AI SaaS landing page template featuring workflow automation copilot, clean UI, and Tailwind CSS design.',
      tags: ['HTML5', 'JavaScript', 'Tailwind CSS', 'SaaS']
    },
    {
      id: 'pharmacare',
      title: 'PharmaCare (In Progress)',
      cat: 'E-Commerce',
      year: '2026',
      featured: false,
      image: '/pharmacare.png', // baddli smiya d l'image 3la hssab li 3andk
      link: '#',
      github: 'https://github.com/...',
      short: 'Advanced pharmacy e-commerce platform featuring an admin dashboard, custom SQL database, and secure PayPal payment API integration.',
      tags: ['PHP', 'SQL', 'Bootstrap', 'PayPal API', 'In Progress']
    }
  ],
  experience: [
    { role:"Full-Stack & WordPress Developer", type:"Freelance", period:"July 2026 — Present", current:true,
      points:[ "Build custom web apps (React, Laravel) and bespoke WordPress sites.",
               "Integrate advanced features using ACF and WooCommerce.",
               "Optimize UI/UX, responsive design, and performance.",
               "Handle complete deployment and live server migration." ] },
    { role:"Web Developer — Internship", type:"Internship", period:"April 2026 — July 2026",
      points:[ "Turned web mockups into dynamic WordPress themes and pages.",
               "Audited and improved technical SEO and load times.",
               "Fixed front-end display bugs and managed updates." ] },
    { role:"Operations Specialist — Internship", type:"Internship", period:"November 2025 — January 2026",
      points:[ "Supported and managed e-commerce merchant accounts.",
               "Monitored payment gateway integrations (PayPal, Stripe).",
               "Gained hands-on experience in online store management." ] },
    { role:"Web Developer — Internship", type:"Internship", period:"September 2025 — October 2025",
      points:[ "Built responsive front-end modules using HTML, CSS, JS, and Bootstrap.",
               "Sliced and integrated mockups with cross-browser compatibility." ] }
  ],
  education: [
    { title:"Diploma in Digital Development — Full Stack", school:"Institut Spécialisé de Gestion et d'Informatique (ISGI), Azli", period:"2023 — 2025", icon:"GraduationCap",
      note:"Full-stack track: PHP, Laravel, MySQL, JavaScript and modern front-end frameworks." },
    { title:"Baccalauréat, Physical Sciences", school:"Lycée Ouahat Taahiliya", period:"2023", icon:"BookOpen",
      note:"Science stream — the maths habit that still helps with layout logic." }
  ],
  marquee: ["WordPress","Elementor","WooCommerce","ACF","Shopify","PHP","Laravel","ReactJS","JavaScript","MySQL","Tailwind","Figma","Git","SEO"]
};

export const NAV = [
  { id:"home", label:"Home", icon:"Sparkles" },
  { id:"about", label:"About", icon:"Heart" },
  { id:"skills", label:"Skills", icon:"Wand2" },
  { id:"services", label:"Services", icon:"Gem" },
  { id:"work", label:"Projects", icon:"FolderHeart", page:"projects" },
  { id:"experience", label:"Experience", icon:"Briefcase" },
  { id:"contact", label:"Contact", icon:"Send" }
];
