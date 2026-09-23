import Link from "next/link";

const focusAreas = [
  {
    title: "AI Engineering",
    description:
      "LLM applications, RAG systems, agents, inference, evaluation and AI-powered applications.",
  },
  {
    title: "AI Automation",
    description:
      "Intelligent workflows, business automation, operational systems and practical AI integrations.",
  },
  {
    title: "AI Products",
    description:
      "Digital products and prototypes that connect technical systems with real users and business needs.",
  },
  {
    title: "Engineering & Research",
    description:
      "Systems thinking, experimental research, additive manufacturing and data-driven engineering.",
  },
];

const projects = [
  {
    number: "01",
    title: "AHMED AI OS",
    category: "AI Systems",
    description:
      "A modular AI operating system connecting memory, knowledge, agents, planning, workflows, evaluation and observability.",
    href: "/ai-os",
  },
  {
    number: "02",
    title: "StoryKids",
    category: "Digital Product",
    description:
      "A personalized children's storytelling product developed across product, web, payments, marketing and automation.",
    href: "/work/storykids",
  },
  {
    number: "03",
    title: "AI Engineering",
    category: "LLM · RAG · Agents",
    description:
      "Selected engineering work exploring modern LLM applications, agent systems and AI pipelines.",
    href: "/work/ai-engineering",
  },
  {
    number: "04",
    title: "Research",
    category: "Engineering",
    description:
      "Doctoral research at the intersection of mechanical engineering, additive manufacturing and dynamic behavior.",
    href: "/research",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Ahmed El-Housni home">
          AHMED EL-HOUSNI
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/work">Work</Link>
          <Link href="/ai-os">AI OS</Link>
          <Link href="/research">Research</Link>
          <Link href="/writing">Writing</Link>
          <Link href="/about">About</Link>
        </nav>
        <a className="header-cta" href="/contact">
          Let&apos;s work together
        </Link>
      </header>

      <section className="hero section">
        <p className="eyebrow">AI ENGINEER · AI SYSTEMS · AUTOMATION</p>
        <h1>I build intelligent systems that turn complex problems into working products.</h1>
        <p className="hero-copy">
          AI engineering, LLM applications, AI agents, automation and digital
          products — backed by an engineering and research background.
        </p>
        <div className="actions">
          <a className="button button-primary" href="/work">
            Explore my work
          </Link>
          <a className="button button-secondary" href="/contact">
            Let&apos;s work together
          </Link>
        </div>
        <p className="availability">
          Based in Morocco · Working globally · Open to selected AI engineering,
          consulting and collaboration opportunities
        </p>
      </section>

      <section className="section section-border" aria-labelledby="build-title">
        <div className="section-heading">
          <p className="eyebrow">CAPABILITIES</p>
          <h2 id="build-title">What I build</h2>
        </div>
        <div className="focus-grid">
          {focusAreas.map((area) => (
            <article className="card" key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section feature-section" aria-labelledby="os-title">
        <div>
          <p className="eyebrow">SIGNATURE PROJECT</p>
          <h2 id="os-title">AHMED AI OS</h2>
          <p className="feature-copy">
            A personal AI operating system designed to connect memory,
            knowledge, agents, planning and workflows into a coherent,
            measurable AI environment.
          </p>
          <a className="text-link" href="/ai-os">
            Explore the architecture →
          </Link>
        </div>
        <div className="system-map" aria-label="AHMED AI OS modules">
          {["Memory", "Knowledge", "Agents", "Planning", "Workflows", "Evaluation", "Observability", "Security"].map(
            (module) => (
              <span key={module}>{module}</span>
            ),
          )}
        </div>
      </section>

      <section className="section section-border" aria-labelledby="work-title">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2 id="work-title">Proof over claims.</h2>
          </div>
          <a className="text-link" href="/work">
            View all work →
          </Link>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <a className="project-row" href={project.href} key={project.number}>
              <span className="project-number">{project.number}</span>
              <span>
                <span className="project-category">{project.category}</span>
                <strong>{project.title}</strong>
                <span className="project-description">{project.description}</span>
              </span>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section narrative" aria-labelledby="journey-title">
        <p className="eyebrow">FROM ENGINEERING TO AI</p>
        <h2 id="journey-title">Engineering taught me to think in systems. Entrepreneurship taught me to think in products.</h2>
        <p>
          AI engineering is where these perspectives meet: understanding a
          problem, designing the system, building the smallest useful version,
          evaluating it and iterating.
        </p>
      </section>

      <section className="section section-border cta-section">
        <p className="eyebrow">LET&apos;S BUILD SOMETHING</p>
        <h2>Have an AI problem worth solving?</h2>
        <p>
          I work on selected AI engineering, automation and AI prototyping
          projects.
        </p>
        <a className="button button-primary" href="/contact">
          Start a conversation
        </Link>
      </section>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Ahmed El-Housni</span>
        <div>
          <Link href="/resume">Resume</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </footer>
    </main>
  );
}
