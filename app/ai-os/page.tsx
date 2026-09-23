import Link from "next/link";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";

const architectureLayers = [
  ["01", "Identity & Context", "User identity, profile, preferences and bounded context."],
  ["02", "Memory & Knowledge", "Structured memory, retrieval, research evidence and provenance."],
  ["03", "Agents & Planning", "Agent runtime, orchestration and explicit action proposals."],
  ["04", "Governance & Security", "Approval, permissions and deny-by-default execution boundaries."],
  ["05", "Tools & Workflows", "Registered tools, workflow state and controlled execution."],
  ["06", "Observability & Evaluation", "Tracing, metrics and explicit evaluation contracts."],
  ["07", "Interfaces & Deployment", "API, dashboard, conversation boundary and container deployment."],
  ["08", "Model Runtime", "Provider-neutral model routing and model-backed planning."],
];

const milestones = [
  ["B1–B14", "Core foundations", "Context, memory, retrieval, agents, tools and orchestration contracts."],
  ["B15–B27", "System composition", "Identity, unified orchestration, governance, integrations and Business OS."],
  ["B28–B34", "Application boundary", "API, dashboard, conversation, observability, evaluation, security and deployment."],
  ["B36–B38", "Model runtime", "Model-backed planning and multi-provider runtime management."],
];

const principles = [
  ["Context first", "Make the user's work and knowledge machine-readable before asking agents to act."],
  ["Human in the loop", "Separate KNOW, INFER, PROPOSE, APPROVE and EXECUTE instead of collapsing them into one opaque step."],
  ["Provider neutral", "Keep vendor SDKs and credentials at integration boundaries rather than inside the core domain."],
  ["Traceable by design", "Important system behavior should expose identifiers, provenance and observable state."],
  ["Scientific integrity", "Do not present unsupported claims, fabricated benchmarks or unverified connectivity as facts."],
  ["Small agents, strong orchestration", "Introduce specialized agents only when they solve a concrete workflow."],
];

export default function AiOsPage() {
  return (
    <main>
      <SiteHeader />

      <section className="case-hero section-shell">
        <div className="case-kicker"><span>01</span><span>SIGNATURE PROJECT · AI SYSTEMS</span></div>
        <div className="case-hero-grid">
          <div>
            <h1>AHMED AI OS</h1>
            <p className="case-hero-lead">A personal AI operating system for knowledge, research, business and daily life — engineered as a modular system rather than a single chatbot.</p>
            <div className="case-actions">
              <Link className="button button-dark" href="/work">Back to work <span>↗</span></Link>
              <a className="button button-light" href="https://github.com/housniahmed/AHMED-AI-OS" target="_blank" rel="noreferrer">View source on GitHub <span>↗</span></a>
            </div>
          </div>
          <div className="case-fact-card">
            <span>PROJECT TYPE</span><strong>Personal AI infrastructure</strong>
            <span>ARCHITECTURE</span><strong>Provider-neutral · modular · testable</strong>
            <span>CURRENT BOUNDARY</span><strong>B1–B38 identified in the repository</strong>
          </div>
        </div>
      </section>

      <section className="case-section section-shell">
        <div className="case-section-head"><p className="eyebrow">02 — THE PROBLEM</p><h2>AI should understand context before it tries to act.</h2></div>
        <div className="case-two-col">
          <p>Most personal AI workflows become a collection of prompts, disconnected automations and vendor-specific integrations. AHMED AI OS takes a systems approach: context, memory, knowledge, reasoning, permissions, tools and workflows are explicit parts of one architecture.</p>
          <p>The goal is not to make the system appear autonomous. The goal is to make its behavior inspectable and controllable — especially when a proposed action can affect external systems.</p>
        </div>
      </section>

      <section className="case-dark">
        <div className="section-shell">
          <div className="case-section-head inverse"><p className="eyebrow">03 — ARCHITECTURE</p><h2>A connected system of explicit boundaries.</h2><p>The repository is organized around contracts and composition boundaries. The model runtime is not allowed to bypass the agent, gateway, security or governance layers.</p></div>
          <div className="architecture-stack">
            {architectureLayers.map(([number, title, text]) => <article className="architecture-row" key={number}><span>{number}</span><strong>{title}</strong><p>{text}</p></article>)}
          </div>
          <div className="execution-flow">{["KNOW","INFER","PROPOSE","APPROVE","EXECUTE","MEMORY UPDATE"].map((item, i) => <span key={item}>{i > 0 && <b>→</b>}{item}</span>)}</div>
        </div>
      </section>

      <section className="case-section section-shell">
        <div className="case-section-head"><p className="eyebrow">04 — ENGINEERING PRINCIPLES</p><h2>The architecture is the product.</h2></div>
        <div className="principle-grid">{principles.map(([title, text]) => <article className="principle-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="case-section section-shell case-milestones">
        <div className="case-section-head"><p className="eyebrow">05 — BUILD EVOLUTION</p><h2>From foundations to a model-backed runtime.</h2><p>The repository has been built incrementally. This milestone view summarizes implementation boundaries documented in the codebase; it does not imply that every external integration is connected or production-ready.</p></div>
        <div className="milestone-list">{milestones.map(([stage, title, text]) => <div className="milestone-row" key={stage}><span>{stage}</span><strong>{title}</strong><p>{text}</p></div>)}</div>
      </section>

      <section className="case-section section-shell case-status">
        <div className="case-status-card">
          <div><p className="eyebrow">06 — CURRENT STATUS</p><h2>Implemented boundaries. Explicit gaps.</h2></div>
          <div className="status-columns">
            <div><h3>Implemented in the repository</h3><ul><li>Provider-neutral core contracts and composition root</li><li>Agent proposal and execution boundaries</li><li>Tool execution gateway</li><li>Human approval / governance foundation</li><li>Security, observability and evaluation boundaries</li><li>API, web dashboard and conversation boundaries</li><li>Container deployment baseline</li><li>Model-backed planning and multi-provider runtime contracts</li></ul></div>
            <div><h3>Still requires production integration</h3><ul><li>Real authentication and authorization runtime</li><li>Durable persistence and migrations</li><li>Production telemetry exporters and alerting</li><li>Concrete external provider / OAuth adapters</li><li>Production infrastructure hardening and CI/CD</li><li>Real-world evaluation datasets and regression gates</li></ul></div>
          </div>
        </div>
      </section>

      <section className="case-cta"><div className="section-shell"><p className="eyebrow">07 — NEXT</p><h2>Build systems that can explain what they know, propose what they want to do, and show what actually happened.</h2><div className="case-actions"><a className="button button-dark" href="https://github.com/housniahmed/AHMED-AI-OS" target="_blank" rel="noreferrer">Explore the repository <span>↗</span></a><Link className="button button-light" href="/contact">Discuss an AI system</Link></div></div></section>

      <SiteFooter />
    </main>
  );
}
