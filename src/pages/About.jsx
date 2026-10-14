import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "index.html", label: "Home" },
  { href: "about.html", label: "About Us", current: true },
  { href: "ai-solutions.html", label: "AI Solutions" },
  { href: "research.html", label: "Research" },
  { href: "products.html", label: "Products" },
  { href: "services.html", label: "Services" },
];

const CHIPS = [
  {
    key: "since",
    position: "top-[5%] left-[8%]",
    delay: "0s",
    duration: undefined,
    shadow: "shadow-gm-teal/10",
    border: "border-gm-teal/10",
    iconColor: "text-gm-teal",
    label: "Since",
    value: "2006",
    icon: (
      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    ),
  },
  {
    key: "clients",
    position: "top-[5%] right-[5%]",
    delay: "1s",
    duration: "7s",
    shadow: "shadow-gm-blue/10",
    border: "border-gm-blue/10",
    iconColor: "text-gm-blue",
    label: "Clients",
    value: "3000+",
    icon: (
      <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    ),
  },
  {
    key: "team",
    position: "bottom-[8%] left-[3%]",
    delay: "2s",
    duration: "8s",
    shadow: "shadow-gm-green/10",
    border: "border-gm-green/10",
    iconColor: "text-gm-green",
    label: "Team",
    value: "230+",
    icon: (
      <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    ),
  },
  {
    key: "retention",
    position: "bottom-[8%] right-[3%]",
    delay: "4s",
    duration: "9s",
    shadow: "shadow-gm-teal/10",
    border: "border-gm-teal/10",
    iconColor: "text-gm-teal",
    label: "Retention",
    value: "96%",
    icon: (
      <path d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    ),
  },
];

const MILESTONES = [
  {
    year: "2006",
    tag: "2006 · The Beginning",
    context: "A web development startup in Indore with a vision.",
    title: <>Webcraft IT <em>founded</em> in Indore, Madhya Pradesh.</>,
    body: "Launched as a web development and IT services startup with a clear vision — serving SMEs with reliable, cost-effective digital solutions. A small team, one office, and the ambition to build something lasting.",
  },
  {
    year: "2008",
    tag: "2008 · Full-Stack Expansion",
    context: "Custom web apps. Full-stack services for B2B.",
    title: <>Expanded into <em>custom web application</em> development.</>,
    body: "Moved beyond static websites into full-stack software services for B2B clients nationwide. Built inventory systems, CRMs, and internal tools that companies still rely on today.",
  },
  {
    year: "2011",
    tag: "2011 · Mobile Practice",
    context: "Mobile-first. Cross-platform enterprise solutions.",
    title: <>Launched <em>mobile app</em> development practice.</>,
    body: "Started delivering cross-platform solutions for enterprise clients. The smartphone wave was reshaping how businesses reached customers — we made sure our clients were ready.",
  },
  {
    year: "2014",
    tag: "2014 · Cloud & Partnerships",
    context: "Microsoft Partner. Cloud infrastructure on Azure.",
    title: <>Achieved <em>Microsoft Partner</em> status.</>,
    body: "Launched cloud-based solutions on Azure and expanded service offerings to include cloud infrastructure capabilities. This was the year we stopped thinking of ourselves as just a dev shop.",
  },
  {
    year: "2016",
    tag: "2016 · Going Global",
    context: "AWS & Google Cloud certified. International clients.",
    title: <>Became certified <em>Cloud Solutions</em> provider on AWS and Google Cloud.</>,
    body: "Started serving international clients across Southeast Asia and the Middle East. Three cloud platforms, one consistent delivery standard — regardless of geography.",
  },
  {
    year: "2018",
    tag: "2018 · The AI Bet",
    context: "AI-powered automation. Global MNC partnerships.",
    title: <>Launched <em>AI-powered</em> automation and predictive analytics.</>,
    body: "Partnered with global MNCs for research and digital transformation. Not because AI was fashionable — because our best clients were asking for it, and we wanted to answer honestly.",
  },
  {
    year: "2020",
    tag: "2020 · Scaling Through Change",
    context: "Digital transformation at scale. Remote-first delivery.",
    title: <>Pivoted to <em>remote-first</em> delivery at enterprise scale.</>,
    body: "When the world went remote, we were already prepared. Delivered 40+ projects across time zones without missing a single deadline. Our process held because it was built to.",
  },
  {
    year: "2022",
    tag: "2022 · The Milestone",
    context: "1,000+ clients. 200+ professionals. New dev centers.",
    title: <>Crossed <em>1,000+ clients</em> and expanded to 200+ professionals.</>,
    body: "Opened new development centers and achieved partnerships with multiple technology leaders. Growth that was earned client by client, project by project.",
  },
  {
    year: "2024",
    tag: "2024 · AI-First",
    context: "AI-first development. Research lab established.",
    title: <>Adopted an <em>AI-first</em> development approach across all practices.</>,
    body: "Established a dedicated research lab and partnered with academic institutions. Every new engagement now starts with an AI readiness assessment — because the question isn't whether to use AI, it's where.",
  },
  {
    year: "2026",
    tag: "2026 · Today",
    context: "Today. 3,000+ clients. Three continents.",
    title: <>3,000+ clients, 230+ professionals, and the <em>same question</em> we started with.</>,
    body: "What should we build — and for whom — and why now? The tooling has changed beyond recognition. The question hasn't. Twenty years in, we're still listening before we propose.",
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header id="navbar" className="fixed top-0 left-0 right-0 z-50 transition-all duration-500" role="banner">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="index.html" className="flex items-center gap-2 z-50" aria-label="Webcraft Home">
            <img src="logo.svg" alt="Webcraft IT" className="h-10 w-auto" />
          </a>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-current={link.current ? "page" : undefined}
                className={`nav-link px-4 py-2 text-sm font-medium ${
                  link.current ? "text-gm-teal" : "text-gm-slate hover:text-gm-teal"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="contact.html"
              className="ml-4 inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-gm-teal to-gm-green text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-gm-teal/25 transition-all"
            >
              Contact Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </nav>

          <button
            id="menuBtn"
            onClick={() => setMenuOpen((open) => !open)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gm-deep transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span className={`block w-6 h-0.5 bg-gm-deep transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span
              className={`block w-4 h-0.5 bg-gm-deep transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-2 w-6" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobileMenu"
          className="mobile-menu fixed inset-0 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              aria-current={link.current ? "page" : undefined}
              className={`text-2xl font-semibold transition ${
                link.current ? "text-gm-teal" : "text-gm-deep hover:text-gm-teal"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="contact.html"
            onClick={closeMenu}
            className="mt-4 px-8 py-3 bg-gradient-to-r from-gm-teal to-gm-green text-white font-semibold rounded-full"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" aria-label="About hero">
      <div className="absolute inset-0 hero-mesh" />
      <div className="orb w-[500px] h-[500px] bg-gm-teal/10 top-[-100px] right-[-100px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-3">
            <span className="reveal section-tag inline-block text-xs text-gm-teal font-bold uppercase tracking-widest bg-gm-teal/8 px-4 py-1.5 rounded-full mb-6">
              About Webcraft
            </span>
            <h1
              className="reveal text-5xl lg:text-6xl font-extrabold text-gm-deep leading-[1.08] tracking-tight"
              style={{ transitionDelay: "0.1s" }}
            >
              The Company
              <br />
              <span className="bg-gradient-to-r from-gm-teal via-gm-blue to-gm-green bg-clip-text text-transparent">
                Behind the Work
              </span>
            </h1>
            <p
              className="reveal text-lg text-gm-muted mt-6 max-w-2xl leading-relaxed"
              style={{ transitionDelay: "0.2s" }}
            >
              Founded in 2006, Webcraft has grown from a web development firm into a research-led, AI-enabled
              digital transformation partner — serving 3000+ clients with a team of 230+ professionals.
            </p>
          </div>

          {/* Right: animated visual */}
          <div className="reveal hidden lg:block lg:col-span-2 relative" style={{ transitionDelay: "0.3s" }}>
            <div className="relative w-full aspect-square max-w-[480px] mx-auto">
              {/* Concentric translucent rings */}
              <div className="absolute inset-[15%] rounded-full bg-gradient-to-br from-gm-teal/20 to-gm-green/20 backdrop-blur-sm border border-gm-teal/10 flex items-center justify-center">
                <div className="absolute inset-[10%] rounded-full bg-gradient-to-br from-gm-teal/30 to-gm-blue/20 border border-white/30 flex items-center justify-center">
                  <div className="absolute inset-[15%] rounded-full bg-gradient-to-br from-gm-teal to-gm-green shadow-2xl shadow-gm-teal/30 flex flex-col items-center justify-center text-white">
                    <span
                      className="font-extrabold text-5xl leading-none about-pulse"
                      style={{ fontFamily: "'Fraunces', serif" }}
                    >
                      17<sup className="text-2xl align-top">+</sup>
                    </span>
                    <span className="text-[10px] font-mono tracking-[0.3em] uppercase mt-2 opacity-90">Years</span>
                  </div>
                </div>
              </div>

              {/* Floating chips */}
              {CHIPS.map((chip) => (
                <div
                  key={chip.key}
                  className={`absolute ${chip.position} bg-white rounded-2xl shadow-lg ${chip.shadow} border ${chip.border} px-3 py-2 flex items-center gap-2 hero-card-float`}
                  style={{
                    animationDelay: chip.delay,
                    ...(chip.duration ? { animationDuration: chip.duration } : {}),
                  }}
                >
                  <svg className={`w-5 h-5 ${chip.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    {chip.icon}
                  </svg>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gm-muted">{chip.label}</span>
                    <span className="text-sm font-bold text-gm-deep">{chip.value}</span>
                  </div>
                </div>
              ))}

              {/* Slow-orbiting decorative dots */}
              <div className="about-orbit-ring" aria-hidden="true">
                <span className="about-orbit-dot about-orbit-dot--a" />
                <span className="about-orbit-dot about-orbit-dot--b" />
                <span className="about-orbit-dot about-orbit-dot--c" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const active = MILESTONES[activeIndex];

  return (
    <section className="story-section bg-white" id="storySection">
      <div className="story-inner max-w-7xl mx-auto px-6 lg:px-8">
        {/* LEFT: Sticky year display */}
        <aside className="story-sticky">
          <span className="section-tag inline-block text-xs text-gm-teal font-bold uppercase tracking-widest bg-gm-teal/8 px-4 py-1.5 rounded-full mb-6">
            Our Story
          </span>
          <div className="story-year-wrap">
            <span className="story-year" id="storyYear">{active.year}</span>
          </div>
          <div className="story-context" id="storyContext">{active.context}</div>
        </aside>

        {/* RIGHT: Scrollable milestones */}
        <div className="story-milestones">
          {MILESTONES.map((m, index) => (
            <article
              key={m.year}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              data-year={m.year}
              data-context={m.context}
              className="story-mile"
            >
              <div className="story-mile__year">{m.tag}</div>
              <h3 className="story-mile__title">{m.title}</h3>
              <p className="story-mile__body">{m.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-white text-gm-slate antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-gm-teal focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        <HeroSection />
        <StorySection />
      </main>
    </div>
  );
}