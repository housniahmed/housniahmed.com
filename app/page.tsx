import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const capabilities = [
  {
    index: "01",
    title: "AI Engineering",
    text: "LLM applications, RAG, agents, inference, evaluation and production-minded AI systems.",
  },
  {
    index: "02",
    title: "AI Automation",
    text: "Intelligent workflows that connect models, tools, data and business processes.",
  },
  {
    index: "03",
    title: "AI Products",
    text: "From technical prototype to usable digital product, with product thinking built into the process.",
  },
  {
    index: "04",
    title: "Engineering & Research",
    text: "Systems thinking grounded in mechanical engineering, applied research and experimental work.",
  },
];

const projects = [
  {
    number: "01",
    title: "AHMED AI OS",
    category: "AI SYSTEMS",
    text: "A modular personal AI operating system exploring memory, knowledge, agents, planning, workflows, evaluation and observability.",
    href: "/ai-os",
  },
  {
    number: "02",
    title: "StoryKids",
    category: "DIGITAL PRODUCT",
    text: "A personalized storytelling product spanning product design, web, payments, acquisition and automation.",
    href: "/work/storykids",
  },
  {
    number: "03",
    title: "AI Engineering",
    category: "LLM · RAG · AGENTS",
    text: "Selected work across modern LLM engineering, AI pipelines and agentic application development.",
    href: "/work/ai-engineering",
  },
];

const osModules = [
  "Memory",
  "Knowledge",
  "Agents",
  "Planning",
  "Workflows",
  "Evaluation",
  "Observability",
  "Security",
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero section-shell">
        <div className="hero-grid">
          <div className="hero-main">
            <div className="eyebrow-row">
              <span className="status-dot" />
              <span>AI ENGINEER · SYSTEMS BUILDER</span>
            </div>

            <h1>
              I build
              <span className="hero-accent"> intelligent systems</span>
              <br />
              for real-world problems.
            </h1>

            <p className="hero-lead">
              I combine engineering, AI and product thinking to design
              practical systems, automations and digital products.
            </p>

            <div className="hero-actions">
              <Link className="button button-dark" href="/work">
                Explore the work <span>↗</span>
              </Link>
              <Link className="button button-light" href="/contact">
                Start a conversation
              </Link>
            </div>
          </div>

          <div className="hero-side">
            <div className="hero-index">01 / 05</div>
            <div className="hero-orbit" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit-core">AI</div>
              <span className="orbit-label orbit-label-one">BUILD</span>
              <span className="orbit-label orbit-label-two">EVALUATE</span>
              <span className="orbit-label orbit-label-three">ITERATE</span>
            </div>
            <p className="hero-side-note">
              Engineering discipline
              <br />
              + AI systems
              <br />
              + product execution
            </p>
          </div>
        </div>

        <div className="hero-meta">
          <span>CASABLANCA · MOROCCO</span>
          <span>WORKING GLOBALLY</span>
          <span>AI · AUTOMATION · PRODUCTS</span>
        </div>
      </section>

      <section className="section-shell capabilities-section">
        <div className="section-intro">
          <p className="eyebrow">01 — CAPABILITIES</p>
          <h2>Four ways I approach the problem.</h2>
        </div>

        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability-card" key={item.index}>
              <span className="card-index">{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ai-os-section">
        <div className="section-shell">
          <div className="section-intro inverse">
            <p className="eyebrow">02 — SIGNATURE PROJECT</p>
            <h2>AHMED AI OS</h2>
            <p>
              A long-term engineering project for building a coherent personal
              AI environment — not a chatbot, but a system of connected
              capabilities.
            </p>
          </div>

          <div className="os-layout">
            <div className="os-visual">
              <div className="os-ring ring-one" />
              <div className="os-ring ring-two" />
              <div className="os-ring ring-three" />
              <div className="os-core">
                <span>AHMED</span>
                <strong>AI OS</strong>
              </div>
            </div>

            <div className="os-modules">
              {osModules.map((module, index) => (
                <div className="os-module" key={module}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{module}</strong>
                </div>
              ))}
              <Link className="module-cta" href="/ai-os">
                Explore the architecture <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell work-section">
        <div className="section-intro split">
          <div>
            <p className="eyebrow">03 — SELECTED WORK</p>
            <h2>Proof over claims.</h2>
          </div>
          <Link className="text-link" href="/work">
            View all work <span>↗</span>
          </Link>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <Link className="project-row" href={project.href} key={project.number}>
              <span className="project-number">{project.number}</span>
              <span className="project-body">
                <span className="project-category">{project.category}</span>
                <strong>{project.title}</strong>
                <span>{project.text}</span>
              </span>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell philosophy-section">
        <div className="philosophy-mark" aria-hidden="true">∞</div>
        <div>
          <p className="eyebrow">04 — HOW I THINK</p>
          <h2>
            Understand the problem.
            <br />
            Build the system.
            <br />
            Measure what matters.
          </h2>
          <p className="philosophy-copy">
            My engineering background brings a systems perspective. My work in
            digital products brings an execution perspective. AI engineering
            is where those two approaches meet.
          </p>
          <Link className="text-link" href="/about">
            More about my journey <span>↗</span>
          </Link>
        </div>
      </section>

      <section className="research-strip">
        <div className="section-shell research-inner">
          <div>
            <p className="eyebrow">05 — RESEARCH</p>
            <h2>Engineering questions deserve rigorous answers.</h2>
          </div>
          <div className="research-copy">
            <p>
              Doctoral research, applied engineering and systematic technical
              work remain part of the foundation behind this AI engineering
              journey.
            </p>
            <Link className="text-link text-link-light" href="/research">
              Explore research <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell contact-section">
        <p className="eyebrow">NEXT</p>
        <h2>Have a problem worth solving with AI?</h2>
        <p>
          I&apos;m open to selected AI engineering, automation, prototyping,
          research and collaboration opportunities.
        </p>
        <Link className="button button-dark" href="/contact">
          Let&apos;s talk <span>↗</span>
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
