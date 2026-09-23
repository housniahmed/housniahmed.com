import Link from "next/link";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";

const projects = [
  {
    number: "01",
    category: "AI SYSTEMS",
    title: "AHMED AI OS",
    summary: "A modular personal AI operating system built around context, memory, agents, governance, tools, observability and model routing.",
    tags: ["Architecture", "Agents", "LLM", "Systems"],
    href: "/ai-os",
    featured: true,
  },
  {
    number: "02",
    category: "DIGITAL PRODUCT",
    title: "StoryKids",
    summary: "A personalized storytelling product combining product design, WordPress, payments, analytics, acquisition and an AI-assisted creative workflow.",
    tags: ["Product", "E-commerce", "AI", "Growth"],
    href: "/work/storykids",
    featured: true,
  },
  {
    number: "03",
    category: "AI ENGINEERING",
    title: "LLM · RAG · AGENTS",
    summary: "Selected AI engineering work across LLM applications, retrieval, fine-tuning, agent runtimes, evaluation and production-oriented pipelines.",
    tags: ["LLM", "RAG", "Agents", "Evaluation"],
    href: "/work/ai-engineering",
    featured: false,
  },
];

const lenses = [
  ["01", "Systems", "Architecture, boundaries, orchestration and reliability."],
  ["02", "Products", "Turning technical capabilities into usable experiences."],
  ["03", "Growth", "Acquisition, analytics, conversion and automation."],
  ["04", "Research", "Engineering questions investigated with measurable methods."],
];

export default function WorkPage() {
  return (
    <main>
      <SiteHeader />

      <section className="work-hero section-shell">
        <div className="work-kicker"><span>WORK</span><span>SELECTED PROJECTS · 2024—2026</span></div>
        <div className="work-hero-grid">
          <div>
            <h1>Proof over claims.</h1>
            <p>
              A selection of systems, products and engineering work. Each case
              study is built from verified project material rather than generic
              portfolio language.
            </p>
          </div>
          <div className="work-index-note">
            <span>04</span>
            <p>systems<br />products<br />research<br />growth</p>
          </div>
        </div>
      </section>

      <section className="work-projects section-shell">
        <div className="work-section-label">
          <p className="eyebrow">01 — SELECTED WORK</p>
          <p>Projects with enough substance to document the reasoning behind the result.</p>
        </div>

        <div className="work-cards">
          {projects.map((project) => (
            <Link
              className={project.featured ? "work-card work-card-featured" : "work-card"}
              href={project.href}
              key={project.number}
            >
              <div className="work-card-top">
                <span>{project.number}</span>
                <span>{project.category}</span>
              </div>
              <div className="work-card-visual" aria-hidden="true">
                <span>{project.number}</span>
                <strong>{project.title}</strong>
              </div>
              <div className="work-card-body">
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
                <div className="work-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <span className="work-card-link">Read case study <span>↗</span></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="work-lenses">
        <div className="section-shell">
          <div className="work-section-label inverse">
            <p className="eyebrow">02 — HOW TO READ THE WORK</p>
            <p>Different projects, same engineering discipline.</p>
          </div>
          <div className="work-lens-grid">
            {lenses.map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-note section-shell">
        <p className="eyebrow">03 — EVIDENCE STANDARD</p>
        <h2>I document what exists, what was tested, and what remains to be built.</h2>
        <p>
          No invented KPIs. No fictional integrations. No production claims
          without production evidence. The objective is to make the work useful
          to someone evaluating how the system was actually designed and built.
        </p>
        <Link className="text-link" href="/contact">Discuss a project <span>↗</span></Link>
      </section>

      <SiteFooter />
    </main>
  );
}
